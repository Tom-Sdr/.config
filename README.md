This repo contains my defaults for tmux settings & default zsh prompt

## Usage

To make use of this config, clone this repo in the home directory.
The name of this repository, `.config`, is where default configuaration files on unix based systems reside (meaning `~/.config`).

This stores the zsh-related files, including the prompt to the `zsh`-directory.
In order for zsh to recognize this, add the following to `~/.zshenv`:

```bash
export ZDOTDIR=$HOME/.config/zsh
```

Existing zsh configuration can be moved to that folder & merged with the predefined setup.

Additionally, it assumes nvm, cargo and android sdk to be installed.
If not present, zsh shows an error.
In case those are not installed, modify `zsh/path-and-env.zsh` accordingly.
