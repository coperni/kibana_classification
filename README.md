Folder should be under `<Kibana_src>/plugins`


## Compiling Kibana Plugin

Instructions based from here: https://www.elastic.co/guide/en/kibana/current/plugin-tooling.html

1. Checkout Kibana repository
```bash
git clone https://github.com/elastic/kibana.git
```

2. Move plugin to ./plugins directory under the kibana repository

3. Run `yarn build` inside the ./plugins/plugin directory