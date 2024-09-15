# info on this file:
    You can use the contents of this file while taking the midterm and final exam. 
    You can add multiple .md files and reference them from your notes.md file in order make it easier to organize your content.

# link to README.md
    [README.md](startup/README.md)

# terminal commands
 ## basic commands
    echo - Output the parameters of the command
    cd - Change directory
    mkdir - Make directory
    rmdir - Remove directory
    rm - Remove file(s)
    mv - Move file(s)
    cp - Copy files
    ls - List files
    curl - Command line client URL browser
    grep - Regular expression search
    find - Find files
    top - View running processes with CPU and memory usage
    df - View disk statistics
    cat - Output the contents of a file
    less - Interactively output the contents of a file
    wc - Count the words in a file
    ps - View the currently running processes
    kill - Kill a currently running process
    sudo - Execute a command as a super user (admin)
    ssh - Create a secure shell on a remote computer
    scp - Securely copy files to a remote computer
    history - Show the history of commands
    ping - Check if a website is up
    tracert - Trace the connections to a website
    dig - Show the DNS information for a domain
    man - Look up a command in the manual
  ## chain the input and output of commands using special characters
    | - Take the output from the command on the left and pipe, or pass, it to the command on the right
    > - Redirect output to a file. Overwrites the file if it exists
    >> - Redirect output to a file. Appends if the file exists
  ## keystrokes that have special meaning in the console
    CTRL-R - Use type ahead to find previous commands
    CTRL-C - Kill the currently running command


# notes on using GitHub
 ## communicating vs code & github
  ### edit in vs code
    edit vs code
    save vs code files
    (in Source Control on Left) press + to Stage Changes
    (above Commit button) write message explaining changes
    (in dropdown of Commit) press Commit and Push
    refresh in github
  ### edit in github
    edit in github
    press Commit changes
    (in vs code terminal in correct directory) git pull
  ### handle conflicts
    if both vs code and github commited changes to the same line...
    (in vs code terminal) git pull
    (in vs code terminal) git config pull.rebase false  # merge
    (in vs code terminal) git push
    (in vs code) resolve merge conflict
    (in dropdown of Commit) press Commit and Push
    refresh in github

 ## github docs about Basic writing and formatting syntax
    [Github doc](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#links)
 
# AWS server
AWS server-EC2: Hart-cs260_startup_webserver
IP address: 3.220.98.222
when in cs260 folder, ssh by: ssh -i keypair/cs260_keypair.pem ubuntu@3.220.98.222
# domain name
https://palettepath.click
and *.palettepath.click
duration 1 year starting 14 sept 2024



