# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)



# 需要做的設定

要去思考
1. component library（component資料夾）
2. 建置時demo的畫面、資料（專案資料夾）
是否應該拆開。雖然技術上build的時候一定可以拆開，但如何讓專案架構更清楚。
新人好上手
src for production
other folder for demo

- base.css
- image
- icon
- demo data(demo json)
- sample page / storybook(拆出另一個專案 ,only for demo, to who? try Histoire)
- component 資料夾
- layout / template
- index 所有頁面/元件的目錄
- pages（需要做幾頁範例）

DONE:
- alias https://stackoverflow.com/questions/66043612/vue3-vite-project-alias-src-to-not-working
- sass
- tailwind  整合config / scss / var


fast or slow? 分成建置時期 and 使用時期

vite vs webpack 建置時期的快慢
storybook  建置很慢，但production很快，所以可以把storybook跟component library拆開，讓開發不要依賴storybook，這樣storybook的快慢就不影響建置。




Q:
2-3個月開發時間
1. 要不要用外部component library? naive UI...先不考慮
2. css未來使用方式，tailwind + 客製css   1.各個小app各自獨立，or 2.global 共用，各個app獨立
3. 什麼時間點用storybook（不做的話希望做好每個component的document，才不會都不知道要傳什麼資料進來）
4. vue的各種技術討論使用

2022/07/05 討論結論：
是否要使用第三方library（ex: carbon / ant-design / ...）考量的點：

1.客製化的難易度。（任何修改！）
很難客製化，會變成一直覆蓋
不然不建議找那麼大的component library

2.如何讓「所有人」都能快速熟悉這個library（可能其他進來支援的人、做案子的人...）