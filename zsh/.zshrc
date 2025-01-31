HISTFILE=~/.histfile
HISTSIZE=1000
SAVEHIST=1000
unsetopt beep
zstyle :compinstall filename '/home/t/.zshrc'

source $ZDOTDIR/keybinds.zsh
source $ZDOTDIR/prompt.zsh

autoload -Uz compinit
compinit

function idea() {
  /opt/intellij-idea-ultimate-edition/bin/idea "$1" > /dev/null 2>&1 & 
}

export VISUAL=vim
export EDITOR="$VISUAL"

#THIS MUST BE AT THE END OF THE FILE FOR SDKMAN TO WORK!!!
export SDKMAN_DIR="$HOME/.sdkman"
[[ -s "$HOME/.sdkman/bin/sdkman-init.sh" ]] && source "$HOME/.sdkman/bin/sdkman-init.sh"

. "$HOME/.cargo/env"
