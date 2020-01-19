`honzi`'s Ubuntu 16.04 Installation
-----------------------------------

### Boot Setup (Only Once)

1. Start computer and spam BIOS key.
2. Set to boot from USB.
3. Save changes and shut down computer.

---

### Installation

1. Boot with USB plugged in and select `Install Ubuntu`.
2. Install Ubuntu solo without third-party software selected.
3. Shutdown computer and remove USB.
4. Start computer, run `Configuration Script` steps. Shut down computer.
5. Start computer, select `GNOME Flashback (Metacity)` before logging in, and begin manual configuration.

---

### Configuration Script

1. `sudo apt-get install git`.
2. `cd ~/Documents` and `git clone --depth 1 https://github.com/honzi/files.git`.
3. `sh files/Scripts/ubuntu/16.04/configure.sh`.
  * Script can be run multiple times, if needed.
  * If uninstalling a package suggests installing more packages, do not uninstall that package. Rerun script after.
4. Add `manual` to opened `gedit` file. Save it and close `gedit`.

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
    * `Offer to translate pages that aren't in a language you read`: NO
    * `Continue running background apps when Chromium is closed`: NO
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
    * Remove non-encrypted-Google search engines.
* `Panels`:
  * Contents:
    * Add `Main Menu` to bottom left corner.
    * Delete top panel.
    * Move `Notification Area` to bottom right corner.
    * Remove all unwanted items.
  * `Main Menu`:
    * Disable all menu categories. Ignore enabled empty submenus.
    * Add menu items for:
      * `Chromium`
      * `TextEditor.gtk`
      * GTK (submenu)
      * `Warzone 2100`
      * `Steam`
      * `EVE`
      * `Terminal`
      * `System Tools`
  * `Properties`:
    * `Size`: 16
    * Solid `#000` background.
* `Steam`
