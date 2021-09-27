# Social Site

A django social site application

## Features

- Users can register, log-in, create and manage their profiles

- Users can follow each other

- Users can shares images from other websites

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

Run the development server

```bash
(social-site) $ python manage.py runserver
```

Visit the site at [http://127.0.0.1:8000](http://127.0.0.1:8000)


