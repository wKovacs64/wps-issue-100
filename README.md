# wps-issue-100

The `master` branch is the old (working) config with `webpack-serve`.

The `wps` branch is the new (broken) config with `webpack-plugin-serve`.

#### Perform the following in each branch to see the difference:

```sh
yarn
yarn develop
```

Browse to [`http://localhost:8000/admin`](http://localhost:8000/admin). You
should see the index page with a link to Page B (/admin/b).
