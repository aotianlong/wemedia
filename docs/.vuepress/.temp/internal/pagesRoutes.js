import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-b8e2ebf8","/ecom/1.%E4%BA%AC%E4%B8%9C%E5%94%AE%E5%90%8E.html",{"title":"京东的售后"},["/ecom/1.京东售后.html","/ecom/1.%E4%BA%AC%E4%B8%9C%E5%94%AE%E5%90%8E","/ecom/1.京东售后.md","/ecom/1.%E4%BA%AC%E4%B8%9C%E5%94%AE%E5%90%8E.md"]],
  ["v-e71e8a6e","/ecom/2.%E5%9F%9F%E5%90%8D%E4%B8%8D%E5%80%BC%E9%92%B1.html",{"title":"域名是越来越不值钱了"},["/ecom/2.域名不值钱.html","/ecom/2.%E5%9F%9F%E5%90%8D%E4%B8%8D%E5%80%BC%E9%92%B1","/ecom/2.域名不值钱.md","/ecom/2.%E5%9F%9F%E5%90%8D%E4%B8%8D%E5%80%BC%E9%92%B1.md"]],
  ["v-181d25a6","/ecom/3.%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90%E4%BC%9A%E5%91%98.html",{"title":"网易云音乐会员"},["/ecom/3.网易云音乐会员.html","/ecom/3.%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90%E4%BC%9A%E5%91%98","/ecom/3.网易云音乐会员.md","/ecom/3.%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90%E4%BC%9A%E5%91%98.md"]],
  ["v-43e9b665","/ecom/%E5%85%83%E6%B0%94%E6%A3%AE%E6%9E%97%E8%96%85%E7%BE%8A%E6%AF%9B%E4%BA%8B%E4%BB%B6.html",{"title":""},["/ecom/元气森林薅羊毛事件.html","/ecom/%E5%85%83%E6%B0%94%E6%A3%AE%E6%9E%97%E8%96%85%E7%BE%8A%E6%AF%9B%E4%BA%8B%E4%BB%B6","/ecom/元气森林薅羊毛事件.md","/ecom/%E5%85%83%E6%B0%94%E6%A3%AE%E6%9E%97%E8%96%85%E7%BE%8A%E6%AF%9B%E4%BA%8B%E4%BB%B6.md"]],
  ["v-5d1f7236","/ecom/%E6%8B%BC%E5%A4%9A%E5%A4%9A%E5%BC%BA%E5%88%B6%E8%AF%84%E4%BB%B7.html",{"title":""},["/ecom/拼多多强制评价.html","/ecom/%E6%8B%BC%E5%A4%9A%E5%A4%9A%E5%BC%BA%E5%88%B6%E8%AF%84%E4%BB%B7","/ecom/拼多多强制评价.md","/ecom/%E6%8B%BC%E5%A4%9A%E5%A4%9A%E5%BC%BA%E5%88%B6%E8%AF%84%E4%BB%B7.md"]],
  ["v-1646b226","/ecom/%E6%8B%BC%E5%A4%9A%E5%A4%9A%E7%89%A9%E6%B5%81%E5%BC%82%E5%B8%B8%E4%BC%9A%E8%A1%A5%E5%81%BF%E6%97%A0%E9%97%A8%E6%A7%9B%E4%BC%98%E6%83%A0%E5%88%B8.html",{"title":"物流异常拼多多给了一张7元无门槛优惠券"},["/ecom/拼多多物流异常会补偿无门槛优惠券.html","/ecom/%E6%8B%BC%E5%A4%9A%E5%A4%9A%E7%89%A9%E6%B5%81%E5%BC%82%E5%B8%B8%E4%BC%9A%E8%A1%A5%E5%81%BF%E6%97%A0%E9%97%A8%E6%A7%9B%E4%BC%98%E6%83%A0%E5%88%B8","/ecom/拼多多物流异常会补偿无门槛优惠券.md","/ecom/%E6%8B%BC%E5%A4%9A%E5%A4%9A%E7%89%A9%E6%B5%81%E5%BC%82%E5%B8%B8%E4%BC%9A%E8%A1%A5%E5%81%BF%E6%97%A0%E9%97%A8%E6%A7%9B%E4%BC%98%E6%83%A0%E5%88%B8.md"]],
  ["v-131de437","/ecom/%E7%9B%B4%E6%92%AD%E5%B8%A6%E8%B4%A7.html",{"title":""},["/ecom/直播带货.html","/ecom/%E7%9B%B4%E6%92%AD%E5%B8%A6%E8%B4%A7","/ecom/直播带货.md","/ecom/%E7%9B%B4%E6%92%AD%E5%B8%A6%E8%B4%A7.md"]],
  ["v-7a9b3ba2","/computers/1.%E7%AC%94%E8%AE%B0%E6%9C%AC%E4%B8%80%E7%9B%B4%E6%8F%92%E7%9D%80%E7%94%B5%E6%BA%90%E4%BC%9A%E6%8D%9F%E5%AE%B3%E7%94%B5%E6%B1%A0%E5%90%97.html",{"title":"笔记本"},["/computers/1.笔记本一直插着电源会损害电池吗.html","/computers/1.%E7%AC%94%E8%AE%B0%E6%9C%AC%E4%B8%80%E7%9B%B4%E6%8F%92%E7%9D%80%E7%94%B5%E6%BA%90%E4%BC%9A%E6%8D%9F%E5%AE%B3%E7%94%B5%E6%B1%A0%E5%90%97","/computers/1.笔记本一直插着电源会损害电池吗.md","/computers/1.%E7%AC%94%E8%AE%B0%E6%9C%AC%E4%B8%80%E7%9B%B4%E6%8F%92%E7%9D%80%E7%94%B5%E6%BA%90%E4%BC%9A%E6%8D%9F%E5%AE%B3%E7%94%B5%E6%B1%A0%E5%90%97.md"]],
  ["v-03c3a978","/computers/2.%E8%AE%B0%E4%B8%80%E6%AC%A1ddos%E9%98%B2%E5%BE%A1%E6%88%98.html",{"title":"服务器被ddos攻击了,分享一下我们的经验"},["/computers/2.记一次ddos防御战.html","/computers/2.%E8%AE%B0%E4%B8%80%E6%AC%A1ddos%E9%98%B2%E5%BE%A1%E6%88%98","/computers/2.记一次ddos防御战.md","/computers/2.%E8%AE%B0%E4%B8%80%E6%AC%A1ddos%E9%98%B2%E5%BE%A1%E6%88%98.md"]],
  ["v-2305eb09","/computers/3.%E7%AC%AC%E4%B8%80%E5%8F%B0%E7%94%B5%E8%84%91.html",{"title":"人生的第一台电脑"},["/computers/3.第一台电脑.html","/computers/3.%E7%AC%AC%E4%B8%80%E5%8F%B0%E7%94%B5%E8%84%91","/computers/3.第一台电脑.md","/computers/3.%E7%AC%AC%E4%B8%80%E5%8F%B0%E7%94%B5%E8%84%91.md"]],
  ["v-2c694a8f","/computers/4.%E7%BD%91%E7%9B%98.html",{"title":"网盘"},["/computers/4.网盘.html","/computers/4.%E7%BD%91%E7%9B%98","/computers/4.网盘.md","/computers/4.%E7%BD%91%E7%9B%98.md"]],
  ["v-bd75159e","/computers/6.macbook%E9%94%AE%E7%9B%98%E5%90%90%E6%A7%BD.html",{"title":"2018款带touchbar macbook pro的真实使用体验,键盘极差，touchbar无用, 摄像头极差"},["/computers/6.macbook键盘吐槽.html","/computers/6.macbook%E9%94%AE%E7%9B%98%E5%90%90%E6%A7%BD","/computers/6.macbook键盘吐槽.md","/computers/6.macbook%E9%94%AE%E7%9B%98%E5%90%90%E6%A7%BD.md"]],
  ["v-fbbe2d0c","/computers/6.%E6%9C%80%E7%89%9B%E7%A8%8B%E5%BA%8F%E5%91%98.html",{"title":""},["/computers/6.最牛程序员.html","/computers/6.%E6%9C%80%E7%89%9B%E7%A8%8B%E5%BA%8F%E5%91%98","/computers/6.最牛程序员.md","/computers/6.%E6%9C%80%E7%89%9B%E7%A8%8B%E5%BA%8F%E5%91%98.md"]],
  ["v-6354adb6","/computers/iina.html",{"title":""},["/computers/iina","/computers/iina.md"]],
  ["v-ca75ad66","/computers/mysql%E5%8D%A1%E6%AD%BB.html",{"title":""},["/computers/mysql卡死.html","/computers/mysql%E5%8D%A1%E6%AD%BB","/computers/mysql卡死.md","/computers/mysql%E5%8D%A1%E6%AD%BB.md"]],
  ["v-5f2acc6c","/computers/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E5%8E%86%E5%8F%B2.html",{"title":""},["/computers/前端开发历史.html","/computers/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E5%8E%86%E5%8F%B2","/computers/前端开发历史.md","/computers/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E5%8E%86%E5%8F%B2.md"]],
  ["v-263582f0","/computers/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E5%8E%86%E5%8F%B2.html",{"title":""},["/computers/浏览器的历史.html","/computers/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E5%8E%86%E5%8F%B2","/computers/浏览器的历史.md","/computers/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E5%8E%86%E5%8F%B2.md"]],
  ["v-37629288","/computers/%E7%BD%91%E9%80%9F.html",{"title":"今天是2021年的11月19日， 刚刚接到电信的客服电话，通知我给我家的宽带免费提速到1000m了"},["/computers/网速.html","/computers/%E7%BD%91%E9%80%9F","/computers/网速.md","/computers/%E7%BD%91%E9%80%9F.md"]],
  ["v-b07b1428","/computers/%E8%BD%AF%E4%BB%B6%E8%AE%B8%E5%8F%AF%E8%AF%81.html",{"title":""},["/computers/软件许可证.html","/computers/%E8%BD%AF%E4%BB%B6%E8%AE%B8%E5%8F%AF%E8%AF%81","/computers/软件许可证.md","/computers/%E8%BD%AF%E4%BB%B6%E8%AE%B8%E5%8F%AF%E8%AF%81.md"]],
  ["v-6ce7954b","/life/1.%E6%99%AE%E9%80%9A%E4%BA%BA.html",{"title":""},["/life/1.普通人.html","/life/1.%E6%99%AE%E9%80%9A%E4%BA%BA","/life/1.普通人.md","/life/1.%E6%99%AE%E9%80%9A%E4%BA%BA.md"]],
  ["v-09b5b8e9","/life/%E6%8A%96%E9%9F%B3%E6%9C%80%E6%81%B6%E5%BF%83%E9%9F%B3%E4%B9%90%E7%9B%98%E7%82%B9.html",{"title":""},["/life/抖音最恶心音乐盘点.html","/life/%E6%8A%96%E9%9F%B3%E6%9C%80%E6%81%B6%E5%BF%83%E9%9F%B3%E4%B9%90%E7%9B%98%E7%82%B9","/life/抖音最恶心音乐盘点.md","/life/%E6%8A%96%E9%9F%B3%E6%9C%80%E6%81%B6%E5%BF%83%E9%9F%B3%E4%B9%90%E7%9B%98%E7%82%B9.md"]],
  ["v-4dc1f68f","/life/%E8%A2%AB%E9%AA%97%E7%BB%8F%E5%8E%86.html",{"title":""},["/life/被骗经历.html","/life/%E8%A2%AB%E9%AA%97%E7%BB%8F%E5%8E%86","/life/被骗经历.md","/life/%E8%A2%AB%E9%AA%97%E7%BB%8F%E5%8E%86.md"]],
  ["v-038e77fa","/life/%E9%AA%A8%E6%8A%98.html",{"title":""},["/life/骨折.html","/life/%E9%AA%A8%E6%8A%98","/life/骨折.md","/life/%E9%AA%A8%E6%8A%98.md"]],
  ["v-50f2de0e","/life/%E9%AC%BC%E5%8E%8B%E5%BA%8A.html",{"title":"鬼压床"},["/life/鬼压床.html","/life/%E9%AC%BC%E5%8E%8B%E5%BA%8A","/life/鬼压床.md","/life/%E9%AC%BC%E5%8E%8B%E5%BA%8A.md"]],
  ["v-a5ff4f48","/programmer/1.%E4%BD%9C%E4%B8%BA%E4%B8%80%E4%B8%AA%E7%A8%8B%E5%BA%8F%E5%91%98%E9%9C%80%E8%A6%81%E5%A4%9A%E9%AB%98%E7%9A%84%E6%96%87%E5%8C%96%E7%A8%8B%E5%BA%A6.html",{"title":"小学文化做了15年的程序员,我的亲身经历"},["/programmer/1.作为一个程序员需要多高的文化程度.html","/programmer/1.%E4%BD%9C%E4%B8%BA%E4%B8%80%E4%B8%AA%E7%A8%8B%E5%BA%8F%E5%91%98%E9%9C%80%E8%A6%81%E5%A4%9A%E9%AB%98%E7%9A%84%E6%96%87%E5%8C%96%E7%A8%8B%E5%BA%A6","/programmer/1.作为一个程序员需要多高的文化程度.md","/programmer/1.%E4%BD%9C%E4%B8%BA%E4%B8%80%E4%B8%AA%E7%A8%8B%E5%BA%8F%E5%91%98%E9%9C%80%E8%A6%81%E5%A4%9A%E9%AB%98%E7%9A%84%E6%96%87%E5%8C%96%E7%A8%8B%E5%BA%A6.md"]],
  ["v-4ca71ab6","/news/fakerjs.html",{"title":""},["/news/fakerjs","/news/fakerjs.md"]],
  ["v-769114b6","/tutorial/javascript/%E5%89%8D%E8%A8%80.html",{"title":""},["/tutorial/javascript/前言.html","/tutorial/javascript/%E5%89%8D%E8%A8%80","/tutorial/javascript/前言.md","/tutorial/javascript/%E5%89%8D%E8%A8%80.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
