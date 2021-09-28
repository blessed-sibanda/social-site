# Social Site

A django social site application

## Features

- Users can register, log-in, create and manage their profiles

- Users can follow each other and track what other users share on the platform

- Users can bookmark and share images that they find on other websites

- Users can see and respond to content uploaded by other users

## Setup Instructions

### Install [Git](https://git-scm.com/downloads)

Clone this repo and `cd` into it

```bash
$ git clone https://github.com/blessed-sibanda/social-site
$ cd social-site
```

### Install [Python](https://python.org/downloads) (version 3.8 or later)

Install pipenv using pip

```bash
$ pip install --user pipenv
```

Create a pipenv virtual environment

```bash
$ pipenv shell --python 3.8
```

Install pip dependencies

```bash
(social-site) $ pipenv install
```

### Install [PostgreSQL](https://www.postgresql.org/download/)

Open postgres terminal and psql

```bash
$ sudo su - postgres
$ psql
```

Create database

```psql
postgres=# CREATE DATABASE social_site;
postgres=# CREATE USER social_site;
postgres=# GRANT ALL ON DATABASE social_site to "social_site";
postgres=# ALTER USER social_site PASSWORD '1234pass';
postgres=# ALTER USER social_site CREATEDB;
postgres=# \q;
```

Exit postgresql shell

```bash
$ exit
```

Run database migrations (in project root folder)

```bash
(social-site) $ python manage.py migrate
```

Create a superuser account

```bash
(social-site) $ python manage.py createsuperuser
```

### Enable Social Authentication in Development Mode
We want to serve the site through HTTPS during development in order to test social authentication with Google.
However, several social services will not allow redirecting users to 127.0.0.1 or localhost after a successful authentication; they expect a domain name. So in order to make social authentication work in development mode, we will need a domain. 

If you are on Linux or macOS, edit your /etc/hosts file and add the following line to it:

```
127.0.0.1 mysite.com
```

This will tell your computer to point the mysite.com hostname to your own machine. If you are using Windows, your hosts file is located at `C:\Windows\System32\Drivers\etc\hosts`.


### Run the application
Run the development server through HTTPS using the `runserver_plus` extension.

```bash
(social-site) $ python manage.py runserver_plus --cert-file cert.crt
```

Visit the site at [https://mysite:8000/account/login](https://mysite:8000/account/login)

Log in with your account (or with your google account) and then drag the **BOOKMARK IT** button to the bookmarks toolbar of your
browser. Make sure the the bookmarks toolbar of your browser is visible. If its not visible, you can use the following links to see how: 

1. For firefox [using this link](https://workona.com/pages/how-to-fix-missing-bookmark-toolbar-firefox/)

2. For google chrome [use this link](https://www.howtogeek.com/415733/how-to-show-or-hide-the-google-chrome-bookmarks-bar/)