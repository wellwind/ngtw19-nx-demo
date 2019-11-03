# Angular Taiwan 2019 - Nx Demo

## Dependency Graph

- `npm run de-pgraph`

## affected

- 隨意修改檔案後，進行一次 commit，使用 `npm run affected:dep-graph -- --base=HEAD~1 --head=HEAD` 瀏覽變更後影響的範圍
- 針對變更後影響的範圍進行建置 `npm run affected:build`
  - `--all`: 建置全部
  - `--parallel`: 平行建置加快速度

## schematics

- `ng g @nrwl/workspace:workspace-schematic [name]`
- `npm run workspace-schematic -- [name] --foo=bar`

## 完整文件

- [Nx.Dev](https://nx.dev/angular)
