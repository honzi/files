`honzi`'s Ubuntu Installation
-----------------------------

### Installation

1. Insert USB into computer.
2. Start computer, spam `ESC`, and set to boot from USB.
3. Save boot changes to continue boot, and select `Install Ubuntu`.
4. Install Ubuntu solo without third-party software selected.
5. Shutdown computer and remove USB.
6. Start computer, run configuration script. Shut down computer.
7. Start computer, select `GNOME Flashback (Metacity)` before logging in, and begin manual configuration.

---

### Configuration Script

1. `sudo apt-get install git`.
2. `git clone https://github.com/honzi/files.git` into `~/Documents/iterami`.
3. `sh files/Scripts/ubuntu/configure.sh`
4. Add `manual` to opened `gedit` file and save it.

---

### Manual Configuration

* `Chromium`:
  * `Flags`:
    * `Smooth Scrolling`: `Disabled`
  * `Settings`:
    * `Sync`:
      * `Sync Everything`: NO
      * `Autofill`: NO
      * `History`: NO
      * `Passwords`: NO
      * `Themes & Wallpapers`: NO
      * `Open Tabs`: NO
      * `Credit cards and addresses using Google Payments`: NO
    * `Use system title bar and borders`: NO
    * `Manage search engines`: Remove all non-encrypted-Google search engines.
    * `Default browser`: YES
    * `Continue running background apps when Chromium is closed`: NO
* `File Browser`:
  * `Behavior`:
    * `Executable Text Files`: `Ask each time`
  * `Preview`:
    * `Show thumbnails`: `Never`
  * `Views`:
    * `View new folders using`: `List View`
    * `Show hidden and backup files`: YES
* `Firefox`:
  * `General`:
    * `When Firefox starts`: `Show my windows and tabs from last time`
    * `Always ask me where to save files`: YES
    * `Check my spelling as I type`: NO
    * `Applications`: All must be `Always ask` or `Preview in Firefox`.
    * `Use smooth scrolling`: NO
  * `Privacy & Security`:
    * `Firefox will`: `Never remember history`
    * `Allow Firefox to send technical and interaction data to Mozilla`: NO
    * `Allow Firefox to send crash reports to Mozilla`: NO
  * `Search`:
    * `Use the address bar for search and navigation`: YES
    * `Provide search suggestions`: NO
    * Remove non-Google search engines.
* `gedit`:
  * `Editor`:
    * `Tab width`: 4
    * `Insert spaces instead of tabs`: YES
  * `Font & Colors`:
    * `Color Scheme`: `Oblivion`
  * `Plugins`:
    * ALL OFF
  * `View`:
    * `Display line numbers`: YES
    * `Display statusbar`: NO
    * `Display overview map`: YES
    * `Highlight current line`: YES
    * `Highlight matching brackets`: YES
* `Panels`:
  * Contents:
    * Remove all unwanted items.
    * Move `Notification Area` to bottom right corner.
    * Add `Main Menu` to bottom left corner.
    * Delete top panel.
  * `Main Menu`:
    * Disable all menu categories.
    * Add menu items for:
      * `Chromium`
      * `TextEditor.c`
      * `FileBrowser.c`
      * `Steam`
      * `Firefox`
      * `Terminal`
* `Steam`
* `System Settings`:
  * `Appearance`:
    * `Background`: `Colors & Gradients`, solid `#000`
  * `Bluetooth`:
    * `Bluetooth`: NO
    * `Show Bluetooth status in the menu bar`: NO
  * `Brightness & Lock`:
    * `Turn screen off when inactive for`: `10 minutes`
  * `Details`:
    * `Removeable Media`: All must `Ask what to do`.
  * `Displays`:
    * `Sticky edges`: NO
  * `Keyboard`:
    * Disable all shortcuts except for:
      * Audio volume
      * Eject
      * Lock screen
  * `Mouse & Touchpad`:
    * `Tap to click`: NO
  * `Security & Privacy`:
    * `Diagnostics`:
      * `Send error reports to Canonical`: NO
      * `Send occasional system information to Canonical`: NO
    * `Files & Applications`:
      * `Record file and application usage`: NO
  * `Time & Date`:
    * `Weekday`: YES
    * `Date and month`: YES
    * `24-hour time`: YES
    * `Seconds`: YES
    * `Include week numbers`: YES
