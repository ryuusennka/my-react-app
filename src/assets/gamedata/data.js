/*
 * @Author: ryuusennka
 * @Date: 2021-08-06 07:05:21
 * @LastEditors: ryuusennka
 * @LastEditTime: 2021-08-18 22:17:35
 * @FilePath: /text-adventure-game/src/assets/gamedata/data.js
 * @Description:
 */
// import Mock from 'mockjs';
const textNodes = [
  {
    id: 1,
    text: '夜晚你惊醒了，你发现你在一个陌生的地方，在你身边有一罐闪着微光的蓝色的粘液',
    options: [
      {
        text: '拿走它',
        setState: { blueGoo: true },
        nextText: 2,
      },
      {
        text: '不管它',
        nextText: 2,
      },
    ],
  },
  {
    id: 2,
    text: '趁着月色你走在路上遇到一个可疑的商人，他向你展示了一柄看起来很华丽的剑和一面很巨大的盾',
    options: [
      {
        text: '用这些粘液换一柄剑⚔',
        // 这个选项要在有粘液的时候才会出现
        requiredState: currentState => currentState.blueGoo, // requiredState 函数，接收 currentState 传参，返回 true/false
        setState: { blueGoo: false, sword: true },
        nextText: 3,
      },
      {
        text: '用这些粘液换一面盾🛡',
        requiredState: currentState => currentState.blueGoo,
        setState: { blueGoo: false, shield: true },
        nextText: 3,
      },
      {
        text: '不管这个商人',
        nextText: 3,
      },
    ],
  },
  {
    id: 3,
    text: '离开商人后，你开始感到疲惫，偶然发现一个小镇旁边的一个看起来很危险的城堡。',
    options: [
      {
        text: '探索城堡',
        nextText: 4,
      },
      {
        text: '在小镇中找到一个房间休息',
        nextText: 5,
      },
      {
        text: '你发现你身无分文，于是在马厩里找些干草睡觉',
        nextText: 6,
      },
    ],
  },
  {
    id: 4,
    text: '你太累了，在探索城堡的时候睡着了，在睡梦中被可怕的怪物杀死了。',
    options: [
      {
        text: '重新开始',
        nextText: -1,
      },
    ],
  },
  {
    id: 5,
    text: '由于没有钱租房间，你闯进最近的旅馆然后睡着了。睡了几个小时之后，旅馆的老板找到了你，让镇上的守卫把你关进了一间牢房。',
    options: [
      {
        text: '重新开始',
        nextText: -1,
      },
    ],
  },
  {
    id: 6,
    text: '你醒来时精力充沛，准备好去探索附近的城堡。',
    options: [
      {
        text: '探索城堡',
        nextText: 7,
      },
    ],
  },
  {
    id: 7,
    text: '在探索城堡的时候，你在城堡中遇到了一个看起来非常可怕的怪物。',
    options: [
      {
        text: '试着逃跑',
        nextText: 8,
      },
      {
        text: '使用你的剑攻击它',
        requiredState: currentState => currentState.sword,
        nextText: 9,
      },
      {
        text: '藏在你的盾牌后面',
        requiredState: currentState => currentState.shield,
        nextText: 10,
      },
      {
        text: '像它扔出你的蓝色粘液',
        requiredState: currentState => currentState.blueGoo,
        nextText: 11,
      },
    ],
  },
  {
    id: 8,
    text: '你试图逃跑是徒劳的，怪物很容易就抓住了你。',
    options: [
      {
        text: '重新开始',
        nextText: -1,
      },
    ],
  },
  {
    id: 9,
    text: '你的剑砍在怪物粗糙的皮上，把剑都砍缺了，最后甚至断掉了。你愚蠢地认为这个怪物可以用一把剑杀死。最后手无寸铁的你被怪物抓住了。',
    options: [
      {
        text: '重新开始',
        nextText: -1,
      },
    ],
  },
  {
    id: 10,
    text: '你举着盾牌围躲避着怪物，最后筋疲力竭。最后怪物很容易就抓住了你。',
    options: [
      {
        text: '重新开始',
        nextText: -1,
      },
    ],
  },
  {
    id: 11,
    text: '你向怪物扔了一罐黏液然后它就爆炸了。尘埃落定之后，你看到怪物被摧毁了。看到你的胜利，你决定宣布这座城堡是你的，并在那里度过你的余生。',
    options: [
      {
        text: '恭喜你。再玩一次。',
        nextText: -1,
      },
    ],
  },
];
export default textNodes;
