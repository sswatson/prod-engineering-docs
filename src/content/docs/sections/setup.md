---
title: Setup
description: Getting set up with the RelationalAI Python library and the VS Code Extension
---

## Credentials and Configuration

The first thing you'll need is login credentials for a Snowflake account that has the RelationalAI Native App installed on it. If you don't have these credentials, please reach out to your account manager to get them.

You can log into the Snowflake web interface at `https://app.snowflake.com` to verify that your credentials work and to see the databases and warehouses you have access to.

Next, create a project directory and create a `raiconfig.toml` file in it. This file will contain your credentials and other configuration settings. Here's an example of a valid profile:

```toml
active_profile = "primary"

[profile.primary]
platform = "snowflake"
user = "your.email.address@relational.ai"
password = "abc123"
account = "NDSOEBE-RAI_INTEGRATION_AWS_USWEST_1_CONSUMER"
role = "ACCOUNTADMIN"
warehouse = "INT_ENV_WH"
rai_app_name = "RAI_INT_APP"
engine = "PYREL_TESTING"
compute_pool = ""
```

There are two ways to create this file:

1. Using the RelationalAI Python CLI. This approach has the advantage that it can present you with options for the various settings, and it can validate the settings you provide. Instructions for using the CLI are below.
2. Manually. You can create the file manually by copying the example above and filling in the values. This approach doesn't require installing Python, but collecting the necessary information will be more challenging.

Let's look at the profile keys one at a time:

1. `platform`. This should always be set to "snowflake".
2. `user`. This is the email address you use to log in at `app.snowflake.com`.
3. `password`. This is the password you use to log in at `app.snowflake.com`.
4. `account`. This is the identifier of the your organization's Snowflake account. The part before the dash is the org identifier, and the part after the dash is the account name. See [here](https://docs.snowflake.com/en/user-guide/admin-account-identifier) for more details.
5. `role`. Permissions in Snowflake are granted to *roles* rather than to individual users, and users are assigned to roles. Your account administrator can tell you which role you should use.
6. `warehouse`. In Snowflake, a *warehouse* is a cluster of compute resources that can be used to run SQL queries and peform other Snowflake operations. Your account administrator can tell you which warehouse you should use.
7. `rai_app_name`. Your account should already have the RelationalAI Native App installed on it. Your account administrator can tell you the name of the app.
8. `engine`. This is the name of the compute engine that will be used to run your Rel queries. You can create an engine using the CLI if none is present. (Note that the engine is different from the warehouse: the engine is provisioned for the use of the RelationalAI Snowpark Container instance, whereas the warehouse performs Snowflake operations.)
9. `compute_pool`. If you need to provision an engine, you have to specify the compute pool that the engine will use. If you don't have to provision an engine, you can leave this field empty. (Note: *compute pool* is a Snowflake concept that is specific to Snowpark Container Services.)

Both the VS Code Extension and the RelationalAI Python library look for the `raiconfig.toml` file in the root of your project directory as well as at `~/.rai/raiconfig.toml`, where `~` is your home directory.

## The VS Code Extension

### Installation

Visual Studio Code (VS Code) is a popular code editor that is available for Windows, macOS, and Linux. The RelationalAI VS Code Extension provides a convenient way to write and run Rel code. It also provides a way to manage your RelationalAI databases and to view the results of your queries.

> **Note**: *VS Code is a friendly editor and can be used to perform RelationalAI operations even if you are a dedicated user of another editor or IDE for your other work.*

To install the RelationalAI VS Code extension, first download VS Code [here](https://code.visualstudio.com/) and open the application. Then open the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window. Search for "RelationalAI" and click the "Install" button.

### Opening a RAI project

Select `File > Open Folder` from your VS Code application and choose a folder in which you want to have a RelationalAI project. Place your `raiconfig.toml` file in the root of that directory and reload the window. You should see a new RelationalAI icon in the Activity Bar on the left side of the window. Click on that icon to open the RelationalAI view. Under `Admin > Profile`, you should see the profile you created in the `raiconfig.toml` file.

## The RelationalAI Python Library

### Quick Start

If you are already a Python user, then begin by installing the RelationalAI Python library from PyPI:

```shell
pip install relationalai
```

If you use another package manager, replace `pip` with the appropriate command.

### Full Guide

If you're new to Python, the instructions below will guide you through setting up a new project with PyRel using Python's built-in virtual environment package `venv`.

First, make sure you have Python (3.10, 3.11, or 3.12) and `pip` available from your command line. You can check this by running `python --version`. You might have to do `python3 --version`, in which case you should replace `python` with `python3` in the commands below.

To create a PyRel project, make a folder and navigate to it in your terminal. Then create a virtual environment and install the `relationalai` package using these commands:

```bash
python -m venv .venv
source .venv/bin/activate  # On Windows use `.venv\Scripts\activate`
pip install relationalai
```

> **Note**: The `source` command puts `.venv/bin` on your `PATH`, so that when you run `python` or `pip` or `rai`, you are using the versions of those programs that are installed in the virtual environment. You can also run these commands directly, like `.venv/bin/pip` or `.venv/bin/rai`.

Next, you can create a config file using the included CLI:

```bash
rai init
```

You will be prompted to choose between Snowflake or Azure; choose Snowflake. Then you will be prompted to enter your Snowflake username, password, and account identifier. For all of the remaining fields, you'll be able to select from a list of available options.

> 💡 You can inspect the state of your configuration setup with `rai config:explain`.

