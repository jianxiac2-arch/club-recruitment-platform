// 模拟社团数据
const clubs = [
    {
        id: 1,
        name: "计算机协会",
        type: "科技类",
        description: "致力于推广计算机技术，组织编程比赛和技术讲座",
        activityScope: "计算机楼、实验室",
        activityType: "技术讲座、编程比赛、项目实践",
        meetingTime: ["周一晚", "周三晚"],
        interview: true,
        interviewRequirements: "需要基本的编程基础，对计算机技术有浓厚兴趣",
        contact: "公众号：计算机协会",
        image: "https://picsum.photos/seed/computer/600/400",
        skills: ["编程", "算法", "网络技术"],
        score: 4.8
    },
    {
        id: 2,
        name: "摄影协会",
        type: "文艺类",
        description: "记录校园生活，分享摄影技巧，组织外拍活动",
        activityScope: "校园各处、户外景点",
        activityType: "外拍活动、摄影讲座、作品展览",
        meetingTime: ["周二晚", "周六"],
        interview: false,
        interviewRequirements: "无需面试，热爱摄影即可",
        contact: "公众号：校园摄影",
        image: "https://picsum.photos/seed/photography/600/400",
        skills: ["摄影", "后期处理", "艺术设计"],
        score: 4.6
    },
    {
        id: 3,
        name: "篮球协会",
        type: "体育类",
        description: "组织篮球比赛，进行技术训练，培养团队精神",
        activityScope: "篮球场、体育馆",
        activityType: "技术训练、友谊赛、校际比赛",
        meetingTime: ["周一晚", "周四晚", "周日"],
        interview: true,
        interviewRequirements: "需要一定的篮球基础，热爱篮球运动",
        contact: "公众号：篮球协会",
        image: "https://picsum.photos/seed/basketball/600/400",
        skills: ["篮球", "团队合作", "体能"],
        score: 4.7
    },
    {
        id: 4,
        name: "辩论协会",
        type: "学术类",
        description: "提高思辨能力，参加辩论比赛，培养口才",
        activityScope: "教学楼、会议室",
        activityType: "辩论训练、校内比赛、校际交流",
        meetingTime: ["周三晚", "周五晚"],
        interview: true,
        interviewRequirements: "需要良好的表达能力和逻辑思维",
        contact: "公众号：辩论协会",
        image: "https://picsum.photos/seed/debate/600/400",
        skills: ["辩论", "演讲", "逻辑思维"],
        score: 4.5
    },
    {
        id: 5,
        name: "志愿者协会",
        type: "志愿类",
        description: "组织公益活动，服务社区，传递爱心",
        activityScope: "社区、福利院、养老院",
        activityType: "公益活动、志愿服务、爱心传递",
        meetingTime: ["周六", "周日"],
        interview: false,
        interviewRequirements: "无需面试，有爱心和责任心即可",
        contact: "公众号：志愿者协会",
        image: "https://picsum.photos/seed/volunteer/600/400",
        skills: ["沟通", "组织", "奉献精神"],
        score: 4.9
    },
    {
        id: 6,
        name: "创业协会",
        type: "创业类",
        description: "分享创业经验，组织创业比赛，对接资源",
        activityScope: "创业园、会议室",
        activityType: "创业讲座、项目路演、资源对接",
        meetingTime: ["周二晚", "周四晚"],
        interview: true,
        interviewRequirements: "对创业有兴趣，有创新思维",
        contact: "公众号：创业协会",
        image: "https://picsum.photos/seed/entrepreneurship/600/400",
        skills: ["商业思维", "团队管理", "创新能力"],
        score: 4.4
    },
    {
        id: 7,
        name: "音乐协会",
        type: "文艺类",
        description: "热爱音乐，共同学习，举办音乐会",
        activityScope: "音乐教室、礼堂",
        activityType: "乐器学习、合唱练习、音乐会",
        meetingTime: ["周三晚", "周日"],
        interview: true,
        interviewRequirements: "需要一定的音乐基础",
        contact: "公众号：音乐协会",
        image: "https://picsum.photos/seed/music/600/400",
        skills: ["音乐", "乐器", "合唱"],
        score: 4.7
    },
    {
        id: 8,
        name: "足球协会",
        type: "体育类",
        description: "组织足球比赛，进行技术训练",
        activityScope: "足球场",
        activityType: "技术训练、友谊赛、校际比赛",
        meetingTime: ["周二晚", "周五晚", "周日"],
        interview: true,
        interviewRequirements: "需要一定的足球基础",
        contact: "公众号：足球协会",
        image: "https://picsum.photos/seed/football/600/400",
        skills: ["足球", "团队合作", "体能"],
        score: 4.6
    },
    {
        id: 9,
        name: "文学社",
        type: "文艺类",
        description: "热爱文学，交流创作，出版刊物",
        activityScope: "图书馆、教室",
        activityType: "文学沙龙、创作交流、刊物出版",
        meetingTime: ["周四晚"],
        interview: false,
        interviewRequirements: "无需面试，热爱文学即可",
        contact: "公众号：文学社",
        image: "https://picsum.photos/seed/literature/600/400",
        skills: ["写作", "文学鉴赏", "编辑"],
        score: 4.5
    },
    {
        id: 10,
        name: "科技创新协会",
        type: "科技类",
        description: "培养创新思维，开展科技项目",
        activityScope: "实验室、创新中心",
        activityType: "项目开发、科技竞赛、创新讲座",
        meetingTime: ["周一晚", "周五晚"],
        interview: true,
        interviewRequirements: "需要一定的科技基础和创新思维",
        contact: "公众号：科技创新协会",
        image: "https://picsum.photos/seed/technology/600/400",
        skills: ["创新思维", "科技研发", "项目管理"],
        score: 4.8
    },
    {
        id: 11,
        name: "乒乓球协会",
        type: "体育类",
        description: "组织乒乓球比赛，进行技术训练",
        activityScope: "乒乓球馆",
        activityType: "技术训练、友谊赛、校内比赛",
        meetingTime: ["周一晚", "周三晚"],
        interview: false,
        interviewRequirements: "无需面试，热爱乒乓球即可",
        contact: "公众号：乒乓球协会",
        image: "https://picsum.photos/seed/tabletennis/600/400",
        skills: ["乒乓球", "反应能力", "体能"],
        score: 4.4
    },
    {
        id: 12,
        name: "英语协会",
        type: "学术类",
        description: "提高英语水平，组织英语活动",
        activityScope: "教室、英语角",
        activityType: "英语角、演讲比赛、翻译活动",
        meetingTime: ["周二晚", "周四晚"],
        interview: false,
        interviewRequirements: "无需面试，热爱英语即可",
        contact: "公众号：英语协会",
        image: "https://picsum.photos/seed/english/600/400",
        skills: ["英语", "口语", "翻译"],
        score: 4.6
    },
    {
        id: 13,
        name: "舞蹈协会",
        type: "文艺类",
        description: "学习舞蹈，参加演出",
        activityScope: "舞蹈教室、礼堂",
        activityType: "舞蹈训练、演出、比赛",
        meetingTime: ["周三晚", "周六"],
        interview: true,
        interviewRequirements: "需要一定的舞蹈基础",
        contact: "公众号：舞蹈协会",
        image: "https://picsum.photos/seed/dance/600/400",
        skills: ["舞蹈", "表现力", "体能"],
        score: 4.7
    },
    {
        id: 14,
        name: "羽毛球协会",
        type: "体育类",
        description: "组织羽毛球比赛，进行技术训练",
        activityScope: "羽毛球场",
        activityType: "技术训练、友谊赛、校内比赛",
        meetingTime: ["周二晚", "周五晚"],
        interview: false,
        interviewRequirements: "无需面试，热爱羽毛球即可",
        contact: "公众号：羽毛球协会",
        image: "https://picsum.photos/seed/badminton/600/400",
        skills: ["羽毛球", "反应能力", "体能"],
        score: 4.5
    },
    {
        id: 15,
        name: "历史协会",
        type: "学术类",
        description: "研究历史，组织历史讲座",
        activityScope: "教室、图书馆",
        activityType: "历史讲座、学术交流、参观博物馆",
        meetingTime: ["周四晚"],
        interview: false,
        interviewRequirements: "无需面试，热爱历史即可",
        contact: "公众号：历史协会",
        image: "https://picsum.photos/seed/history/600/400",
        skills: ["历史知识", "学术研究", "表达能力"],
        score: 4.3
    },
    {
        id: 16,
        name: "机器人协会",
        type: "科技类",
        description: "设计制作机器人，参加机器人比赛",
        activityScope: "实验室、机器人中心",
        activityType: "机器人制作、编程、比赛",
        meetingTime: ["周一晚", "周三晚", "周六"],
        interview: true,
        interviewRequirements: "需要一定的编程和机械基础",
        contact: "公众号：机器人协会",
        image: "https://picsum.photos/seed/robot/600/400",
        skills: ["机器人设计", "编程", "机械原理"],
        score: 4.9
    },
    {
        id: 17,
        name: "网球协会",
        type: "体育类",
        description: "组织网球比赛，进行技术训练",
        activityScope: "网球场",
        activityType: "技术训练、友谊赛、校内比赛",
        meetingTime: ["周三晚", "周日"],
        interview: true,
        interviewRequirements: "需要一定的网球基础",
        contact: "公众号：网球协会",
        image: "https://picsum.photos/seed/tennis/600/400",
        skills: ["网球", "反应能力", "体能"],
        score: 4.4
    },
    {
        id: 18,
        name: "书画协会",
        type: "文艺类",
        description: "学习书法绘画，举办书画展览",
        activityScope: "美术教室、展厅",
        activityType: "书画练习、作品展览、交流活动",
        meetingTime: ["周二晚", "周六"],
        interview: false,
        interviewRequirements: "无需面试，热爱书画即可",
        contact: "公众号：书画协会",
        image: "https://picsum.photos/seed/calligraphy/600/400",
        skills: ["书法", "绘画", "艺术鉴赏"],
        score: 4.6
    },
    {
        id: 19,
        name: "数学协会",
        type: "学术类",
        description: "研究数学问题，参加数学竞赛",
        activityScope: "教室、数学实验室",
        activityType: "数学讲座、竞赛培训、学术交流",
        meetingTime: ["周一晚", "周四晚"],
        interview: true,
        interviewRequirements: "需要良好的数学基础",
        contact: "公众号：数学协会",
        image: "https://picsum.photos/seed/mathematics/600/400",
        skills: ["数学", "逻辑思维", "问题解决"],
        score: 4.5
    },
    {
        id: 20,
        name: "排球协会",
        type: "体育类",
        description: "组织排球比赛，进行技术训练",
        activityScope: "排球场",
        activityType: "技术训练、友谊赛、校内比赛",
        meetingTime: ["周二晚", "周五晚"],
        interview: true,
        interviewRequirements: "需要一定的排球基础",
        contact: "公众号：排球协会",
        image: "https://picsum.photos/seed/volleyball/600/400",
        skills: ["排球", "团队合作", "体能"],
        score: 4.4
    },
    {
        id: 21,
        name: "电影协会",
        type: "文艺类",
        description: "欣赏电影，讨论电影艺术",
        activityScope: "放映厅、教室",
        activityType: "电影放映、影评讨论、电影制作",
        meetingTime: ["周五晚"],
        interview: false,
        interviewRequirements: "无需面试，热爱电影即可",
        contact: "公众号：电影协会",
        image: "https://picsum.photos/seed/film/600/400",
        skills: ["电影鉴赏", "影评写作", "视频制作"],
        score: 4.7
    },
    {
        id: 22,
        name: "电子竞技协会",
        type: "科技类",
        description: "组织电竞比赛，培养电竞人才",
        activityScope: "电竞馆、计算机室",
        activityType: "训练、比赛、解说",
        meetingTime: ["周三晚", "周六"],
        interview: true,
        interviewRequirements: "需要一定的游戏水平",
        contact: "公众号：电子竞技协会",
        image: "https://picsum.photos/seed/esports/600/400",
        skills: ["电竞", "团队合作", "反应能力"],
        score: 4.8
    },
    {
        id: 23,
        name: "武术协会",
        type: "体育类",
        description: "学习武术，强身健体",
        activityScope: "体育馆、操场",
        activityType: "武术训练、表演、比赛",
        meetingTime: ["周一晚", "周四晚"],
        interview: true,
        interviewRequirements: "需要一定的武术基础或身体素质",
        contact: "公众号：武术协会",
        image: "https://picsum.photos/seed/martialarts/600/400",
        skills: ["武术", "体能", "毅力"],
        score: 4.6
    },
    {
        id: 24,
        name: "话剧社",
        type: "文艺类",
        description: "排练话剧，参加演出",
        activityScope: "戏剧教室、礼堂",
        activityType: "排练、演出、戏剧 workshops",
        meetingTime: ["周二晚", "周六"],
        interview: true,
        interviewRequirements: "需要一定的表演能力",
        contact: "公众号：话剧社",
        image: "https://picsum.photos/seed/drama/600/400",
        skills: ["表演", "台词", "舞台表现力"],
        score: 4.5
    },
    {
        id: 25,
        name: "化学协会",
        type: "学术类",
        description: "进行化学实验，研究化学问题",
        activityScope: "化学实验室",
        activityType: "实验、讲座、竞赛",
        meetingTime: ["周三晚", "周五晚"],
        interview: true,
        interviewRequirements: "需要良好的化学基础",
        contact: "公众号：化学协会",
        image: "https://picsum.photos/seed/chemistry/600/400",
        skills: ["化学实验", "科学研究", "动手能力"],
        score: 4.4
    },
    {
        id: 26,
        name: "游泳协会",
        type: "体育类",
        description: "组织游泳活动，进行游泳训练",
        activityScope: "游泳馆",
        activityType: "游泳训练、比赛、水上活动",
        meetingTime: ["周一晚", "周四晚"],
        interview: true,
        interviewRequirements: "需要会游泳",
        contact: "公众号：游泳协会",
        image: "https://picsum.photos/seed/swimming/600/400",
        skills: ["游泳", "体能", "水感"],
        score: 4.3
    },
    {
        id: 27,
        name: "动漫协会",
        type: "文艺类",
        description: "热爱动漫，组织动漫相关活动",
        activityScope: "教室、活动室",
        activityType: "动漫放映、cosplay、漫画创作",
        meetingTime: ["周五晚", "周日"],
        interview: false,
        interviewRequirements: "无需面试，热爱动漫即可",
        contact: "公众号：动漫协会",
        image: "https://picsum.photos/seed/anime/600/400",
        skills: ["cosplay", "漫画创作", "动漫鉴赏"],
        score: 4.7
    },
    {
        id: 28,
        name: "物理协会",
        type: "学术类",
        description: "研究物理问题，进行物理实验",
        activityScope: "物理实验室",
        activityType: "实验、讲座、竞赛",
        meetingTime: ["周二晚", "周四晚"],
        interview: true,
        interviewRequirements: "需要良好的物理基础",
        contact: "公众号：物理协会",
        image: "https://picsum.photos/seed/physics/600/400",
        skills: ["物理实验", "科学研究", "逻辑思维"],
        score: 4.4
    },
    {
        id: 29,
        name: "轮滑协会",
        type: "体育类",
        description: "学习轮滑，参加轮滑活动",
        activityScope: "操场、广场",
        activityType: "轮滑训练、表演、比赛",
        meetingTime: ["周三晚", "周六"],
        interview: false,
        interviewRequirements: "无需面试，热爱轮滑即可",
        contact: "公众号：轮滑协会",
        image: "https://picsum.photos/seed/rollerskating/600/400",
        skills: ["轮滑", "平衡能力", "体能"],
        score: 4.5
    },
    {
        id: 30,
        name: "广播台",
        type: "文艺类",
        description: "校园广播，传递校园声音",
        activityScope: "广播室",
        activityType: "播音、编辑、采访",
        meetingTime: ["周一至周五"],
        interview: true,
        interviewRequirements: "需要良好的普通话和表达能力",
        contact: "公众号：校园广播台",
        image: "https://picsum.photos/seed/radio/600/400",
        skills: ["播音", "编辑", "采访"],
        score: 4.6
    },
    {
        id: 31,
        name: "环境协会",
        type: "志愿类",
        description: "保护环境，开展环保活动",
        activityScope: "校园、社区",
        activityType: "环保活动、宣传、调研",
        meetingTime: ["周六"],
        interview: false,
        interviewRequirements: "无需面试，热爱环保即可",
        contact: "公众号：环境协会",
        image: "https://picsum.photos/seed/environmental/600/400",
        skills: ["环保意识", "组织能力", "调研能力"],
        score: 4.7
    },
    {
        id: 32,
        name: "心理学协会",
        type: "学术类",
        description: "学习心理学知识，开展心理服务",
        activityScope: "心理咨询室、教室",
        activityType: "讲座、心理咨询、团体活动",
        meetingTime: ["周三晚"],
        interview: true,
        interviewRequirements: "对心理学有兴趣，有良好的沟通能力",
        contact: "公众号：心理学协会",
        image: "https://picsum.photos/seed/psychology/600/400",
        skills: ["心理学知识", "沟通能力", "倾听能力"],
        score: 4.5
    },
    {
        id: 33,
        name: "棋类协会",
        type: "体育类",
        description: "下棋，交流棋艺",
        activityScope: "活动室、教室",
        activityType: "下棋、比赛、讲座",
        meetingTime: ["周二晚", "周四晚"],
        interview: false,
        interviewRequirements: "无需面试，热爱下棋即可",
        contact: "公众号：棋类协会",
        image: "https://picsum.photos/seed/chess/600/400",
        skills: ["下棋", "逻辑思维", "策略思考"],
        score: 4.4
    },
    {
        id: 34,
        name: "礼仪协会",
        type: "文艺类",
        description: "学习礼仪知识，参加礼仪活动",
        activityScope: "教室、礼堂",
        activityType: "礼仪培训、礼仪服务、讲座",
        meetingTime: ["周五晚"],
        interview: true,
        interviewRequirements: "需要良好的形象和礼仪素养",
        contact: "公众号：礼仪协会",
        image: "https://picsum.photos/seed/etiquette/600/400",
        skills: ["礼仪", "形象管理", "沟通能力"],
        score: 4.3
    },
    {
        id: 35,
        name: "汽车协会",
        type: "科技类",
        description: "研究汽车知识，组织汽车相关活动",
        activityScope: "汽车实验室、停车场",
        activityType: "讲座、实践、参观",
        meetingTime: ["周六"],
        interview: true,
        interviewRequirements: "对汽车有兴趣，有一定的机械知识",
        contact: "公众号：汽车协会",
        image: "https://picsum.photos/seed/automotive/600/400",
        skills: ["汽车知识", "机械原理", "动手能力"],
        score: 4.4
    },
    {
        id: 36,
        name: "健身协会",
        type: "体育类",
        description: "健身，保持健康",
        activityScope: "健身房、操场",
        activityType: "健身训练、健康讲座、比赛",
        meetingTime: ["周一晚", "周三晚", "周五晚"],
        interview: false,
        interviewRequirements: "无需面试，热爱健身即可",
        contact: "公众号：健身协会",
        image: "https://picsum.photos/seed/fitness/600/400",
        skills: ["健身", "体能", "毅力"],
        score: 4.6
    },
    {
        id: 37,
        name: "文学创作协会",
        type: "文艺类",
        description: "创作文学作品，交流创作经验",
        activityScope: "教室、图书馆",
        activityType: "创作、交流、出版",
        meetingTime: ["周四晚"],
        interview: false,
        interviewRequirements: "无需面试，热爱文学创作即可",
        contact: "公众号：文学创作协会",
        image: "https://picsum.photos/seed/creativewriting/600/400",
        skills: ["写作", "创意", "文学鉴赏"],
        score: 4.5
    },
    {
        id: 38,
        name: "国际关系协会",
        type: "学术类",
        description: "研究国际关系，开展国际交流",
        activityScope: "教室、国际交流中心",
        activityType: "讲座、模拟联合国、国际交流",
        meetingTime: ["周二晚"],
        interview: true,
        interviewRequirements: "对国际关系有兴趣，有良好的英语水平",
        contact: "公众号：国际关系协会",
        image: "https://picsum.photos/seed/international/600/400",
        skills: ["国际关系知识", "英语", "外交能力"],
        score: 4.4
    },
    {
        id: 39,
        name: "街舞协会",
        type: "文艺类",
        description: "学习街舞，参加演出",
        activityScope: "舞蹈教室、广场",
        activityType: "街舞训练、演出、比赛",
        meetingTime: ["周三晚", "周六"],
        interview: true,
        interviewRequirements: "需要一定的舞蹈基础",
        contact: "公众号：街舞协会",
        image: "https://picsum.photos/seed/streetdance/600/400",
        skills: ["街舞", "表现力", "体能"],
        score: 4.7
    },
    {
        id: 40,
        name: "创业孵化协会",
        type: "创业类",
        description: "孵化创业项目，提供创业支持",
        activityScope: "创业园、孵化器",
        activityType: "项目孵化、创业培训、资源对接",
        meetingTime: ["周一晚", "周五晚"],
        interview: true,
        interviewRequirements: "有创业想法，有创新思维",
        contact: "公众号：创业孵化协会",
        image: "https://picsum.photos/seed/startup/600/400",
        skills: ["创业思维", "项目管理", "资源整合"],
        score: 4.6
    }
];

// 用户数据
let user = {
    interests: [],
    skills: [],
    availableTime: [],
    isLoggedIn: false,
    username: "",
    applications: []
};

// DOM 元素
const startBtn = document.getElementById('start-btn');
const interestSelection = document.getElementById('interest-selection');
const skillSelection = document.getElementById('skill-selection');
const timeSelection = document.getElementById('time-selection');
const recommendation = document.getElementById('recommendation');
const nextBtn = document.getElementById('next-btn');
const skillNextBtn = document.getElementById('skill-next-btn');
const timeNextBtn = document.getElementById('time-next-btn');
const tags = document.querySelectorAll('.tag');
const timeSlots = document.querySelectorAll('.time-slot');
const clubList = document.getElementById('club-list');
const clubGrid = document.getElementById('club-grid');
const clubType = document.getElementById('club-type');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const loginBtn = document.getElementById('login-btn');
const loginModal = document.getElementById('login-modal');
const closeModal = document.querySelector('.close');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const profileSection = document.getElementById('profile');
const userInfo = document.getElementById('user-info');
const applicationList = document.getElementById('application-list');
const pagination = document.getElementById('pagination');
const qaFloat = document.getElementById('qa-float');
const qaButton = document.querySelector('.qa-button');
const qaPanel = document.querySelector('.qa-panel');
const closeQa = document.querySelector('.close-qa');

// 分页相关变量
let currentPage = 1;
const clubsPerPage = 6;
let filteredClubs = clubs;

// 检测当前页面
function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('profile.html')) return 'profile';
    if (path.includes('activities.html')) return 'activities';
    return 'index';
}

// 初始化页面
function init() {
    const currentPage = getCurrentPage();
    
    // 根据页面初始化不同功能
    if (currentPage === 'index') {
        // 首页功能
        if (startBtn) startBtn.addEventListener('click', startMatching);
        if (nextBtn) nextBtn.addEventListener('click', goToSkillSelection);
        if (skillNextBtn) skillNextBtn.addEventListener('click', goToTimeSelection);
        if (timeNextBtn) timeNextBtn.addEventListener('click', generateRecommendations);
        if (tags) tags.forEach(tag => tag.addEventListener('click', toggleTag));
        if (timeSlots) timeSlots.forEach(slot => slot.addEventListener('click', toggleTimeSlot));
        if (searchBtn) searchBtn.addEventListener('click', searchClubs);
        if (clubType) clubType.addEventListener('change', filterClubs);
        
        // 渲染社团列表
        renderClubs(clubs);
    } else if (currentPage === 'profile') {
        // 我的报名页面功能
        updateProfile();
    }
    
    // 所有页面共有的功能
    if (loginBtn) loginBtn.addEventListener('click', openLoginModal);
    if (closeModal) closeModal.addEventListener('click', closeLoginModal);
    if (tabBtns) tabBtns.forEach(btn => btn.addEventListener('click', switchTab));
    if (loginForm) loginForm.addEventListener('submit', handleLogin);
    if (registerForm) registerForm.addEventListener('submit', handleRegister);
    
    // Q&A交互链接事件
    if (qaButton) qaButton.addEventListener('click', toggleQAPanel);
    if (closeQa) closeQa.addEventListener('click', toggleQAPanel);
    
    // 点击模态框外部关闭
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            closeLoginModal();
        }
        // 点击Q&A面板外部关闭
        if (e.target === qaPanel) {
            toggleQAPanel();
        }
    });
    
    // 检查登录状态
    checkLoginStatus();
}

// 切换Q&A面板
function toggleQAPanel() {
    qaPanel.classList.toggle('hidden');
}

// 开始匹配流程
function startMatching() {
    document.getElementById('home').classList.add('hidden');
    interestSelection.classList.remove('hidden');
}

// 切换兴趣标签
function toggleTag(e) {
    const tag = e.target;
    tag.classList.toggle('selected');
    const tagText = tag.dataset.tag;
    
    if (tag.classList.contains('selected')) {
        user.interests.push(tagText);
    } else {
        user.interests = user.interests.filter(interest => interest !== tagText);
    }
}

// 切换时间槽
function toggleTimeSlot(e) {
    const slot = e.target;
    slot.classList.toggle('selected');
    const timeText = slot.dataset.time;
    
    if (slot.classList.contains('selected')) {
        user.availableTime.push(timeText);
    } else {
        user.availableTime = user.availableTime.filter(time => time !== timeText);
    }
}

// 进入技能选择
function goToSkillSelection() {
    interestSelection.classList.add('hidden');
    skillSelection.classList.remove('hidden');
}

// 进入时间选择
function goToTimeSelection() {
    const skillsText = document.getElementById('skills').value;
    user.skills = skillsText.split(',').map(skill => skill.trim()).filter(skill => skill);
    skillSelection.classList.add('hidden');
    timeSelection.classList.remove('hidden');
}

// 生成推荐
function generateRecommendations() {
    timeSelection.classList.add('hidden');
    recommendation.classList.remove('hidden');
    
    // 计算匹配度
    const recommendedClubs = clubs.map(club => {
        let matchScore = 0;
        const matchReasons = [];
        
        // 兴趣匹配
        if (user.interests.includes(club.type)) {
            matchScore += 40;
            matchReasons.push('兴趣类型匹配');
        }
        
        // 技能匹配
        const skillMatch = club.skills.some(skill => 
            user.skills.some(userSkill => 
                userSkill.includes(skill) || skill.includes(userSkill)
            )
        );
        if (skillMatch) {
            matchScore += 30;
            matchReasons.push('技能特长匹配');
        }
        
        // 时间匹配
        const timeMatch = club.meetingTime.some(time => user.availableTime.includes(time));
        if (timeMatch) {
            matchScore += 30;
            matchReasons.push('时间安排匹配');
        }
        
        return { ...club, matchScore, matchReasons };
    }).sort((a, b) => b.matchScore - a.matchScore).slice(0, 3);
    
    // 渲染推荐结果
    renderRecommendedClubs(recommendedClubs);
}

// 渲染推荐社团
function renderRecommendedClubs(clubs) {
    clubList.innerHTML = '';
    
    clubs.forEach(club => {
        const clubCard = document.createElement('div');
        clubCard.className = 'club-card';
        
        // 生成匹配原因HTML
        const matchReasonsHTML = club.matchReasons.length > 0 ? 
            `<div class="match-reasons">
                <p><strong>匹配原因:</strong></p>
                <ul>
                    ${club.matchReasons.map(reason => `<li>${reason}</li>`).join('')}
                </ul>
            </div>` : '';
        
        clubCard.innerHTML = `
            <img src="${club.image}" alt="${club.name}">
            <div class="club-card-content">
                <h3>${club.name}</h3>
                <p>${club.description}</p>
                <div class="club-meta">
                    <span class="match-score">匹配度: ${club.matchScore}%</span>
                    <span class="club-type">${club.type}</span>
                </div>
                ${matchReasonsHTML}
                <div class="club-info">
                    <p><strong>活动范围:</strong> ${club.activityScope}</p>
                    <p><strong>活动形式:</strong> ${club.activityType}</p>
                    <p><strong>活动时间:</strong> ${club.meetingTime.join('、')}</p>
                    <p><strong>面试要求:</strong> ${club.interviewRequirements}</p>
                    <p><strong>联系方式:</strong> ${club.contact}</p>
                </div>
                <button class="btn-primary" onclick="applyToClub(${club.id})">立即报名</button>
            </div>
        `;
        clubList.appendChild(clubCard);
    });
}

// 渲染社团列表（支持分页）
function renderClubs(clubs) {
    // 更新过滤后的社团列表
    filteredClubs = clubs;
    // 重置当前页码
    currentPage = 1;
    // 渲染当前页的社团
    renderCurrentPageClubs();
    // 渲染分页按钮
    renderPagination();
}

// 渲染当前页的社团
function renderCurrentPageClubs() {
    clubGrid.innerHTML = '';
    
    const startIndex = (currentPage - 1) * clubsPerPage;
    const endIndex = startIndex + clubsPerPage;
    const currentClubs = filteredClubs.slice(startIndex, endIndex);
    
    currentClubs.forEach(club => {
        const clubCard = document.createElement('div');
        clubCard.className = 'club-card';
        clubCard.innerHTML = `
            <img src="${club.image}" alt="${club.name}">
            <div class="club-card-content">
                <h3>${club.name}</h3>
                <p>${club.description}</p>
                <div class="club-meta">
                    <span class="match-score">评分: ${club.score}</span>
                    <span class="club-type">${club.type}</span>
                </div>
                <div class="club-info">
                    <p><strong>活动范围:</strong> ${club.activityScope}</p>
                    <p><strong>活动形式:</strong> ${club.activityType}</p>
                    <p><strong>活动时间:</strong> ${club.meetingTime.join('、')}</p>
                    <p><strong>面试要求:</strong> ${club.interviewRequirements}</p>
                    <p><strong>联系方式:</strong> ${club.contact}</p>
                </div>
                <button class="btn-primary" onclick="applyToClub(${club.id})">立即报名</button>
            </div>
        `;
        clubGrid.appendChild(clubCard);
    });
}

// 渲染分页按钮
function renderPagination() {
    pagination.innerHTML = '';
    
    const totalPages = Math.ceil(filteredClubs.length / clubsPerPage);
    
    // 上一页按钮
    const prevBtn = document.createElement('button');
    prevBtn.textContent = '上一页';
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderCurrentPageClubs();
            renderPagination();
        }
    });
    pagination.appendChild(prevBtn);
    
    // 页码按钮
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        pageBtn.classList.toggle('active', i === currentPage);
        pageBtn.addEventListener('click', () => {
            currentPage = i;
            renderCurrentPageClubs();
            renderPagination();
        });
        pagination.appendChild(pageBtn);
    }
    
    // 下一页按钮
    const nextBtn = document.createElement('button');
    nextBtn.textContent = '下一页';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderCurrentPageClubs();
            renderPagination();
        }
    });
    pagination.appendChild(nextBtn);
}

// 搜索社团
function searchClubs() {
    const searchTerm = searchInput.value.toLowerCase();
    const result = clubs.filter(club => 
        club.name.toLowerCase().includes(searchTerm) ||
        club.description.toLowerCase().includes(searchTerm)
    );
    renderClubs(result);
}

// 筛选社团
function filterClubs() {
    const type = clubType.value;
    let result = clubs;
    
    if (type !== 'all') {
        result = clubs.filter(club => club.type === type);
    }
    
    renderClubs(result);
}

// 打开登录模态框
function openLoginModal() {
    if (loginModal) loginModal.classList.remove('hidden');
}

// 关闭登录模态框
function closeLoginModal() {
    if (loginModal) loginModal.classList.add('hidden');
}

// 切换标签页
function switchTab(e) {
    const tab = e.target.dataset.tab;
    
    // 更新标签按钮状态
    tabBtns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    // 显示对应内容
    tabContents.forEach(content => content.classList.add('hidden'));
    const tabContent = document.getElementById(`${tab}-tab`);
    if (tabContent) tabContent.classList.remove('hidden');
}

// 检查登录状态
function checkLoginStatus() {
    const savedUser = localStorage.getItem('clubUser');
    if (savedUser) {
        const userData = JSON.parse(savedUser);
        user.isLoggedIn = userData.isLoggedIn;
        user.username = userData.username;
        user.interests = userData.interests || [];
        user.skills = userData.skills || [];
        user.availableTime = userData.availableTime || [];
        user.applications = userData.applications || [];
        updateLoginStatus();
        // 检查当前是否在我的报名页面
        if (getCurrentPage() === 'profile') {
            updateProfile();
        }
    }
}

// 保存用户数据到localStorage
function saveUserData() {
    localStorage.setItem('clubUser', JSON.stringify(user));
}

// 处理登录
function handleLogin(e) {
    e.preventDefault();
    const username = e.target[0].value;
    user.isLoggedIn = true;
    user.username = username;
    saveUserData();
    closeLoginModal();
    updateLoginStatus();
    // 检查当前是否在我的报名页面
    if (getCurrentPage() === 'profile') {
        updateProfile();
    }
    setTimeout(() => {
        alert('登录成功！');
    }, 100);
}

// 处理注册
function handleRegister(e) {
    e.preventDefault();
    const username = e.target[0].value;
    user.isLoggedIn = true;
    user.username = username;
    saveUserData();
    closeLoginModal();
    updateLoginStatus();
    // 检查当前是否在我的报名页面
    if (getCurrentPage() === 'profile') {
        updateProfile();
    }
    setTimeout(() => {
        alert('注册成功！');
    }, 100);
}

// 更新登录状态
function updateLoginStatus() {
    if (user.isLoggedIn && loginBtn) {
        loginBtn.textContent = user.username;
        loginBtn.onclick = () => {
            window.location.href = 'profile.html';
        };
    }
}

// 更新个人中心
function updateProfile() {
    if (userInfo) {
        if (user.isLoggedIn) {
            userInfo.innerHTML = `
                <p><strong>用户名:</strong> ${user.username}</p>
                <p><strong>兴趣标签:</strong> ${user.interests.join(', ') || '未设置'}</p>
                <p><strong>技能特长:</strong> ${user.skills.join(', ') || '未设置'}</p>
                <p><strong>空闲时间:</strong> ${user.availableTime.join(', ') || '未设置'}</p>
            `;
        } else {
            userInfo.innerHTML = '<p>请先登录</p>';
        }
    }
    
    // 显示实际报名记录
    if (applicationList) {
        if (user.applications.length > 0) {
            applicationList.innerHTML = user.applications.map(app => {
                const date = new Date(app.timestamp).toLocaleDateString();
                return `
                    <div style="padding: 1rem; border-bottom: 1px solid #ddd;">
                        <h4>${app.clubName}</h4>
                        <p><strong>姓名:</strong> ${app.name}</p>
                        <p><strong>年级:</strong> ${app.grade}</p>
                        <p><strong>专业:</strong> ${app.major}</p>
                        <p><strong>联系方式:</strong> ${app.phone}</p>
                        <p><strong>报名时间:</strong> ${date}</p>
                        <p>状态: 待处理</p>
                    </div>
                `;
            }).join('');
        } else {
            applicationList.innerHTML = '<p>暂无报名记录</p>';
        }
    }
}

// 报名社团
function applyToClub(clubId) {
    if (!user.isLoggedIn) {
        openLoginModal();
        return;
    }
    
    const club = clubs.find(c => c.id === clubId);
    
    // 创建报名表单
    const formHTML = `
        <div style="padding: 20px;">
            <h3>报名 ${club.name}</h3>
            <form id="application-form">
                <div style="margin-bottom: 15px;">
                    <label>姓名:</label>
                    <input type="text" name="name" required style="width: 100%; padding: 8px; margin-top: 5px;">
                </div>
                <div style="margin-bottom: 15px;">
                    <label>年级:</label>
                    <select name="grade" required style="width: 100%; padding: 8px; margin-top: 5px;">
                        <option value="">请选择</option>
                        <option value="大一">大一</option>
                        <option value="大二">大二</option>
                        <option value="大三">大三</option>
                        <option value="大四">大四</option>
                    </select>
                </div>
                <div style="margin-bottom: 15px;">
                    <label>专业:</label>
                    <input type="text" name="major" required style="width: 100%; padding: 8px; margin-top: 5px;">
                </div>
                <div style="margin-bottom: 15px;">
                    <label>联系方式:</label>
                    <input type="tel" name="phone" required style="width: 100%; padding: 8px; margin-top: 5px;">
                </div>
                <div style="margin-top: 20px;">
                    <button type="submit" style="background-color: #4CAF50; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">提交报名</button>
                </div>
            </form>
        </div>
    `;
    
    // 创建模态框
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            ${formHTML}
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // 关闭按钮
    const closeBtn = modal.querySelector('.close');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    // 点击模态框外部关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    // 表单提交
    const form = modal.querySelector('#application-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const applicationData = {
            clubId: club.id,
            clubName: club.name,
            name: formData.get('name'),
            grade: formData.get('grade'),
            major: formData.get('major'),
            phone: formData.get('phone'),
            timestamp: new Date().toISOString()
        };
        
        // 保存报名信息到用户数据
        user.applications.push(applicationData);
        saveUserData(); // 保存到localStorage
        console.log('报名信息:', applicationData);
        console.log('用户报名记录:', user.applications);
        alert(`成功报名 ${club.name}！我们会尽快联系你。`);
        document.body.removeChild(modal);
    });
}

// 初始化
init();