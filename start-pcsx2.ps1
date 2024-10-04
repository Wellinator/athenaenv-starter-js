# Adapted from this file https://github.com/h4570/tyra/blob/master/windows-pcsx2.ps1

# =======================
$CUSTOM_PCSX2_PATH = "D:/PS2DEV/PCSX2/pcsx2-v1.7.4479-windows-64bit-Qt" # "D:/My/Path/To/PCSX2"
# =======================

function GetTargetELFName {
    return Get-ChildItem -Path "./src" -Filter "*.elf"  -Recurse | Select-Object -ExpandProperty Name
}

function FindPCSX2Directory {
    if (-not [string]::IsNullOrEmpty($CUSTOM_PCSX2_PATH)) {
        return $CUSTOM_PCSX2_PATH
    }
    else {
        # Try to find in program files
        $pcsx2Path = "${Env:ProgramFiles}/PCSX2"
        $pcsx2Pathx86 = "${Env:ProgramFiles(x86)}/PCSX2"

        if (Test-Path -Path $pcsx2Path) {
            return $pcsx2Path
        }
        elseif (Test-Path -Path $pcsx2Pathx86) {
            return $pcsx2Pathx86
        }
        else {
            throw "PCSX2 directory not found!"
            return $null
        }
    }
}

function IsNewQtVersionOfPCSX2 {
    param (
        [string]$path
    )
    
    return Test-Path -Path "$path/qt.conf"
}

function FindPCSX2Executable {
    param (
        [string]$directory
    )

    $pcsx2ExePath = Join-Path -Path $directory -ChildPath 'pcsx2.exe'
    $pcsx2QtExePath = Join-Path -Path $directory -ChildPath 'pcsx2-qt.exe'

    if (Test-Path -Path $pcsx2ExePath) {
        return 'pcsx2.exe'
    }
    elseif (Test-Path -Path $pcsx2QtExePath) {
        return 'pcsx2-qt.exe'
    }
    else {
        throw "PCSX2 executable not found in: $directory!"
        return $null
    }
}

function StartPCSX2 {
    $dirPath = FindPCSX2Directory
    $noGui = $true
    $isNewVersion = IsNewQtVersionOfPCSX2 -path $dirPath
    $executableName = FindPCSX2Executable -directory $dirPath
    $executableNameWithoutExt = (Split-Path $executableName -Leaf).Split('.')[0]
    $targetFileName = "$PWD\dist\$(GetTargetELFName)"

    Stop-Process -Name $executableNameWithoutExt -ErrorAction 'SilentlyContinue'

    if ($isNewVersion) {
        if ($noGui) {
            Start-Process -FilePath "$dirPath/$executableName" -ArgumentList "-batch -nogui -fastboot -elf", $targetFileName -NoNewWindow
        }
        else {
            Start-Process -FilePath "$dirPath/$executableName" -ArgumentList "-batch -fastboot -elf", $targetFileName
        }
    }
    else {
        # Old version of PCSX2
        Start-Process -FilePath "$dirPath/$executableName" -ArgumentList "--elf=$targetFileName"
    }
}

StartPCSX2