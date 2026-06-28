(function () {
  const flows = [
    {
      id: "topic",
      no: 1,
      title: "科展題目的訂定",
      subtitle: "把好奇改寫成可測量、可重複、可完成的研究問題",
      bigIdea: "題目不是作文標題，而是研究問題的濃縮。好的題目要同時具備清楚聚焦、可用科學方法檢驗、具生活性、學生可親作、能產生資料。",
      goals: ["能分辨好奇問題與研究題目", "能寫出自變因、依變因與控制條件", "能用檢核表判斷題目是否可行"],
      sequence: ["從生活現象蒐集 10 個好奇", "挑 3 個能測量的問題", "套用比較型、條件型、改良型或模型型句型", "用 1-5 分評估可測量性、可行性、安全性"],
      activities: ["生活情境卡：校園、家庭、社區、課堂現象", "題目改寫工作坊：把大題目縮成可測量題", "題目評分雷達：低於 3 分的項目回到改寫"],
      mistakes: ["題目太大，例如改善全球暖化", "只寫現象，沒有明確測量指標", "直接複製歷屆作品，沒有新增差異"],
      checklist: ["研究對象具體", "自變因清楚", "依變因可測量", "能重複實驗", "符合安全與倫理"],
      output: "題目、研究問題、變因草稿、題目可行性評分",
      teacherPrompts: ["這個題目要測量什麼？", "哪一個條件是你主動改變的？", "如果今天重做一次，別人能照著做嗎？"],
      studentTasks: ["寫出 3 個候選題目", "標出自變因與依變因", "選出最可行的一題並說明理由"]
    },
    {
      id: "literature",
      no: 2,
      title: "文獻探討",
      subtitle: "查找已知內容、既有方法與可改進的研究缺口",
      bigIdea: "文獻探討不是貼資料，而是回答三件事：這個主題已經知道什麼，別人怎麼做，我們可以改進或延伸哪一部分。",
      goals: ["能查找官方、科普與歷屆作品來源", "能整理文獻摘要卡", "能比較前人方法與本研究差異"],
      sequence: ["先查科教館歷屆優勝作品", "再查教科書、科普書、政府或大學網站", "整理研究對象、方法、變因、指標與結果", "找出樣本、材料、環境或量化方式的缺口"],
      activities: ["歷屆作品導讀：找同科別與同關鍵字", "摘要卡練習：一篇資料整理成八欄", "比較表：前人方法與本研究差異"],
      mistakes: ["只複製網頁文字", "沒有標明作者、年份或網址", "看完文獻卻沒有回到自己的研究問題"],
      checklist: ["至少 3-5 筆資料", "來源可信且可追溯", "能說明前人方法", "能指出研究缺口", "引用格式完整"],
      output: "文獻摘要卡、文獻比較表、研究缺口說明",
      teacherPrompts: ["這篇資料和你的題目有什麼關係？", "別人的測量方法能不能改善？", "你的研究新在哪裡？"],
      studentTasks: ["完成 3 張摘要卡", "做一張比較表", "用 2 句話說明研究缺口"]
    },
    {
      id: "motivation",
      no: 3,
      title: "引起動機",
      subtitle: "用觀察、疑問、缺口與目的說清楚為什麼要研究",
      bigIdea: "好的研究動機來自生活觀察、課堂經驗、校園或社區問題、新聞事件、失敗經驗或前人研究不足，而不是只寫我很好奇。",
      goals: ["能寫出具體生活觀察", "能連結文獻缺口", "能形成 150-250 字研究動機"],
      sequence: ["先描述觀察到的現象", "提出現象中的不確定之處", "連回文獻探討發現的缺口", "說明本研究要用什麼方法回答什麼問題"],
      activities: ["四段式填空：觀察、疑問、缺口、目的", "壞動機改寫：把心得改成研究動機", "同儕互讀：找出哪一句缺乏證據"],
      mistakes: ["只寫因為很好奇", "宣稱很重要但沒有說明對誰重要", "動機與後面的研究目的脫節"],
      checklist: ["有具體觀察", "有清楚疑問", "有文獻缺口", "有研究目的", "字數精簡且不空泛"],
      output: "150-250 字研究動機段落",
      teacherPrompts: ["你最早看到的現象是什麼？", "查資料後哪裡還不清楚？", "這段動機能不能自然接到研究目的？"],
      studentTasks: ["寫出生活觀察", "補上文獻缺口", "完成一段研究動機草稿"]
    },
    {
      id: "design",
      no: 4,
      title: "實驗研究設計",
      subtitle: "把研究問題變成可執行、可重複、可檢驗的程序",
      bigIdea: "實驗設計要讓研究問題變成清楚程序，包含自變因、依變因、控制變因、對照組、重複次數、材料設備、安全與倫理。",
      goals: ["能辨識三種變因", "能規劃對照組與重複次數", "能建立研究日誌與安全評估"],
      sequence: ["寫研究問題與假設", "列自變因、依變因、控制變因", "設計對照組與重複測量", "檢查材料規格、步驟、安全與倫理"],
      activities: ["變因分類卡：把條件放進正確欄位", "實驗設計表填寫", "風險評估討論：高溫、化學品、生物、電力"],
      mistakes: ["只改變一個條件，卻同時換了材料與環境", "沒有對照組", "步驟太模糊，別人無法重做"],
      checklist: ["研究問題明確", "變因完整", "控制條件一致", "有重複次數", "安全與倫理已評估"],
      output: "實驗設計表、材料清單、步驟表、安全評估",
      teacherPrompts: ["哪一項條件必須保持不變？", "為什麼需要重複測量？", "這個方法有沒有安全風險？"],
      studentTasks: ["完成實驗設計表", "寫出可重做步驟", "建立第一次研究日誌"]
    },
    {
      id: "data",
      no: 5,
      title: "資料收集及分析",
      subtitle: "讓原始資料、圖表與判讀共同回答研究問題",
      bigIdea: "資料分析不是貼表格，而是從原始資料整理出平均、變化量、差異、趨勢、圖表與合理解釋，且判讀不能超過資料支持範圍。",
      goals: ["能保留可追溯的原始資料", "能依資料型態選圖表", "能寫出一句話資料判讀"],
      sequence: ["設計資料表欄位", "每筆資料記錄日期、組別、條件與測量方式", "依類別或連續數據選圖表", "寫出趨勢、差異、限制與異常值說明"],
      activities: ["資料表欄位產生器", "圖表選擇練習：長條、折線、散布或照片序列", "一句話結論：每張圖只說一件事"],
      mistakes: ["只留下平均值，不留原始資料", "圖表沒有單位或座標軸", "刪除異常值卻沒有說明理由"],
      checklist: ["原始資料完整", "資料可追溯", "圖表標題與單位完整", "有異常值說明", "判讀不誇大"],
      output: "原始資料表、圖表、圖表一句話結論、資料判讀",
      teacherPrompts: ["這筆資料從哪一天、哪一組來？", "這張圖最想讓人看見什麼？", "資料能不能支持你的說法？"],
      studentTasks: ["整理原始資料表", "選擇合適圖表", "為每張圖寫一句話結論"]
    },
    {
      id: "discussion",
      no: 6,
      title: "討論以及結論",
      subtitle: "討論回答為什麼，結論回答發現什麼",
      bigIdea: "討論要解釋結果，結論要回應研究目的。每一句結論都必須連回一張表、一張圖或一筆觀察紀錄。",
      goals: ["能區分討論與結論", "能用文獻或原理解釋結果", "能寫出 3-6 點有資料支持的結論"],
      sequence: ["先列主要發現", "用科學概念或文獻解釋", "比較結果是否支持假設", "說明限制、誤差、改進方向與應用價值"],
      activities: ["結論對照檢查器：每句話連回資料", "誤差來源分類：樣本、儀器、環境、操作", "未來研究改寫：從限制找下一步"],
      mistakes: ["把推測寫成結論", "只重複結果，沒有解釋原因", "完全不提限制或誤差"],
      checklist: ["主要發現有數據", "解釋連回原理", "結論回應目的", "限制具體", "未來改進可操作"],
      output: "討論段落、3-6 點條列結論、限制與改進方向",
      teacherPrompts: ["哪一句是資料支持，哪一句只是推測？", "結果為什麼會這樣？", "如果再做一次，你會先改哪裡？"],
      studentTasks: ["標出每句結論的資料來源", "寫出至少 2 個限制", "提出一個可執行改進"]
    },
    {
      id: "report",
      no: 7,
      title: "製作科展作品書",
      subtitle: "把研究歷程整理成精簡、完整、可查核的作品說明書",
      bigIdea: "作品書不是把所有資料塞進去，而是用清楚章節呈現研究動機、目的、文獻、方法、結果、討論、結論與參考文獻。",
      goals: ["能掌握作品書章節", "能寫 300 字以內摘要", "能檢查引用、圖表編號與研究倫理聲明"],
      sequence: ["先完成章節骨架", "整理研究方法與結果圖表", "補上討論、結論與參考文獻", "最後寫摘要並檢查頁數與格式"],
      activities: ["作品書拼圖：把內容放到正確章節", "摘要壓縮練習：目的、方法、結果、結論", "格式檢查：頁數、圖表、引用、附錄"],
      mistakes: ["摘要太長或放入圖表", "方法寫得太簡略", "圖表編號與正文沒有互相對應"],
      checklist: ["摘要 300 字以內", "章節完整", "方法可重做", "圖表有編號與說明", "參考文獻完整"],
      output: "完整作品說明書草稿",
      teacherPrompts: ["讀者只看方法能不能重做？", "摘要是否含目的、方法、結果、結論？", "哪張圖最能支持你的結論？"],
      studentTasks: ["完成作品書章節草稿", "檢查摘要字數", "完成引用與圖表清單"]
    },
    {
      id: "oral",
      no: 8,
      title: "複試口頭報告",
      subtitle: "確認學生真正理解、親自參與、能解釋數據與限制",
      bigIdea: "複試不是背稿比賽，而是展示學生是否理解研究設計、資料意義、科學原理、限制與未來修正方向。",
      goals: ["能用 2-5 分鐘講清楚研究", "能回答評審常見問題", "能用數據、原理與限制回應追問"],
      sequence: ["一句話題目與動機", "說明問題、假設與方法", "挑 2-3 張關鍵圖表說結果", "說明討論、限制、結論與下一步"],
      activities: ["限時短講：2 分鐘版與 5 分鐘版", "口試抽題：隨機題庫練習", "同儕回饋：回答問題、引用數據、解釋原理、承認限制"],
      mistakes: ["只背稿，遇到追問就停住", "看圖表卻說不出單位與意義", "把老師或家長協助說成自己完成"],
      checklist: ["報告結構清楚", "能解釋圖表", "能說明變因", "能承認限制", "能說明學生親作部分"],
      output: "2-5 分鐘講稿、答詢題庫、口試練習紀錄",
      teacherPrompts: ["這張圖最重要的訊息是什麼？", "評審如果問為什麼，你會怎麼回答？", "哪些部分是你自己完成的？"],
      studentTasks: ["完成短講稿", "練習 10 題評審問答", "錄音後修正說明不清楚處"]
    }
  ];

  function buildSlides(flow) {
    return [
      {
        kicker: `流程 ${flow.no} / 8`,
        visual: "cover",
        title: flow.title,
        main: flow.subtitle,
        bullets: ["本組簡報共 9 頁", "適合一節課導入，也可拆成小組任務", `最後產出：${flow.output}`],
        sideTitle: "教學定位",
        side: flow.bigIdea
      },
      {
        kicker: "學習目標",
        visual: "goals",
        title: "學生上完這段要會什麼？",
        main: "這一段不只講概念，而是讓學生完成可被教師檢核的研究產出。",
        bullets: flow.goals,
        sideTitle: "教師提醒",
        side: "先確認學生能用自己的話說明目標，再進入工具或模板填寫。"
      },
      {
        kicker: "核心概念",
        visual: "concept",
        title: "本流程的關鍵判斷",
        main: flow.bigIdea,
        bullets: flow.teacherPrompts,
        sideTitle: "提問方式",
        side: "用追問讓學生說出理由，而不是只檢查表格是否填滿。"
      },
      {
        kicker: "教學順序",
        visual: "sequence",
        title: "建議的課堂流程",
        main: "按照由粗到細、由想法到證據的順序，學生比較不會一開始就卡在格式。",
        bullets: flow.sequence,
        sideTitle: "時間配置",
        side: "可用 10 分鐘示範、20 分鐘小組操作、10 分鐘分享、5 分鐘教師回饋。"
      },
      {
        kicker: "課堂活動",
        visual: "activity",
        title: "讓學生動手做",
        main: "活動要產生可留下來的紀錄，後續才能接到作品書、研究日誌或口試準備。",
        bullets: flow.activities,
        sideTitle: "分組建議",
        side: "每組 3-4 人，分工為記錄、查找、提問、發表，避免只有一位學生在操作。"
      },
      {
        kicker: "常見錯誤",
        visual: "mistakes",
        title: "先提醒，少走彎路",
        main: "科展卡關常常不是知識不足，而是早期流程沒有留下可檢核的證據。",
        bullets: flow.mistakes,
        sideTitle: "修正原則",
        side: "不要直接替學生改好；請他們先說明問題在哪裡，再選一項最小修正。"
      },
      {
        kicker: "檢核點",
        visual: "checklist",
        title: "進入下一流程前要確認",
        main: "每個流程都應該有通過標準。沒有通過，就先回到本流程修正。",
        bullets: flow.checklist,
        sideTitle: "老師簽核",
        side: "可在網站後台標示：完成、待修正、需老師確認。"
      },
      {
        kicker: "產出物",
        visual: "output",
        title: "學生要留下什麼？",
        main: flow.output,
        bullets: flow.studentTasks,
        sideTitle: "保存方式",
        side: "建議每次產出都存入作品歷程，未來可直接匯入作品書或口頭報告素材。"
      },
      {
        kicker: "收束與下一步",
        visual: "next",
        title: "從這一流程接到下一流程",
        main: "用 3 分鐘讓學生回顧：我完成了什麼、我還缺什麼、下一步要問誰或查什麼。",
        bullets: ["一句話說明本流程成果", "列出一個仍不確定的問題", "確認下一流程需要帶入的資料"],
        sideTitle: "帶走一句話",
        side: `完成「${flow.title}」後，學生應能拿著自己的產出往下一階段前進。`
      }
    ];
  }

  const decks = flows.map((flow) => ({ ...flow, slides: buildSlides(flow) }));
  const externalDecks = {
    topic: {
      src: "science_fair_topic_slides.html",
      pages: 12,
      label: "完整簡報"
    },
    literature: {
      src: "science_fair_literature_review_slides.html",
      pages: 13,
      label: "完整簡報"
    },
    motivation: {
      src: "science_fair_motivation_slides.html",
      pages: 13,
      label: "完整簡報"
    },
    design: {
      src: "science_fair_experimental_design_slides.html",
      pages: 32,
      label: "完整簡報"
    },
    data: {
      src: "science_fair_data_analysis_slides.html",
      pages: 16,
      label: "完整簡報"
    },
    discussion: {
      src: "science_fair_discussion_conclusion_slides.html",
      pages: 16,
      label: "完整簡報"
    }
  };

  const deckSelect = document.getElementById("deck-select");
  const slideEl = document.getElementById("web-slide");
  const progressList = document.getElementById("deck-progress-list");
  const prevBtn = document.getElementById("prev-slide");
  const nextBtn = document.getElementById("next-slide");
  const fullBtn = document.getElementById("fullscreen-slide");
  const stage = document.getElementById("slide-stage");
  const deckControls = document.querySelector(".deck-controls");
  const slideHint = document.querySelector(".slide-hint");

  if (!deckSelect || !slideEl || !progressList) return;

  let deckIndex = 0;
  let slideIndex = 0;

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function renderOptions() {
    deckSelect.innerHTML = decks
      .map((deck, index) => `<option value="${index}">${deck.no}. ${escapeHtml(deck.title)}</option>`)
      .join("");
  }

  function renderProgress(deck) {
    const externalDeck = externalDecks[deck.id];
    progressList.classList.toggle("external-deck", Boolean(externalDeck));
    if (externalDeck) {
      progressList.innerHTML = `
        <li>
          <button type="button" aria-current="true">
            <span>${deck.no}</span>
            <span>${escapeHtml(externalDeck.label)}（${externalDeck.pages} 頁）</span>
          </button>
        </li>
      `;
      return;
    }

    progressList.innerHTML = deck.slides
      .map((slide, index) => `
        <li>
          <button type="button" data-slide-jump="${index}" aria-current="${index === slideIndex}">
            <span>${index + 1}</span>
            <span>${escapeHtml(slide.kicker)}</span>
          </button>
        </li>
      `)
      .join("");
  }

  const visualOrder = ["cover", "goals", "concept", "sequence", "activity", "mistakes", "checklist", "output", "next"];

  const sceneWords = {
    topic: ["好奇", "變因", "測量", "題目"],
    literature: ["來源", "方法", "缺口", "引用"],
    motivation: ["觀察", "疑問", "目的", "動機"],
    design: ["自變因", "依變因", "對照", "安全"],
    data: ["原始資料", "圖表", "趨勢", "判讀"],
    discussion: ["發現", "原因", "限制", "結論"],
    report: ["摘要", "方法", "圖表", "參考"],
    oral: ["短講", "數據", "答詢", "修正"]
  };

  let sceneLabelQueue = [];

  function sceneTheme(flow, slide) {
    const order = visualOrder.indexOf(slide.visual);
    const hue = (118 + flow.no * 23 + order * 11) % 360;
    const hue2 = (196 + flow.no * 17 + order * 19) % 360;
    const cx = 18 + ((flow.no * 13 + order * 7) % 68);
    const cy = 14 + ((flow.no * 9 + order * 5) % 72);
    const tilt = -14 + ((flow.no * 5 + order * 4) % 28);
    return `--hue:${hue};--hue2:${hue2};--cx:${cx}%;--cy:${cy}%;--tilt:${tilt}deg;`;
  }

  function card(left, top, width, height, rot = 0) {
    return `<span class="scene-card" style="left:${left}%;top:${top}%;width:${width}%;height:${height}%;transform:rotate(${rot}deg)"></span>`;
  }

  function node(text, left, top, width = 25, height = 18) {
    const rawText = String(text);
    const label = /^\?+$/.test(rawText) && sceneLabelQueue.length ? sceneLabelQueue.shift() : rawText;
    return `<span class="scene-node" style="left:${left}%;top:${top}%;width:${width}%;height:${height}%">${escapeHtml(label)}</span>`;
  }

  function line(left, top, width, rot = 0) {
    return `<span class="scene-line" style="left:${left}%;top:${top}%;width:${width}%;transform:rotate(${rot}deg)"></span>`;
  }

  function dot(left, top) {
    return `<span class="scene-dot" style="left:${left}%;top:${top}%"></span>`;
  }

  function chart(flow, heights = [52, 76, 44, 92]) {
    return `<div class="scene-chart"><span class="axis"></span>${heights.map((h, i) => `<span class="bar" style="left:${24 + i * 14}%;height:${h}%;background:hsl(${(120 + flow.no * 20 + i * 24) % 360} 56% 45%)"></span>`).join("")}</div>`;
  }

  function lab(flow) {
    return `<div class="scene-lab">${[0, 1, 2, 3].map((_, i) => `<span class="tube" style="left:${22 + i * 14}%;height:${82 + i * 10}px;filter:hue-rotate(${flow.no * 18 + i * 18}deg)"></span>`).join("")}</div>`;
  }

  function plant(flow) {
    return `<div class="scene-plant"><span class="stem"></span>${[[-4,37,-28],[12,28,28],[-12,52,-18],[15,62,22]].map(([x,y,r]) => `<span class="leaf" style="left:calc(50% + ${x}px);top:${y}%;--rot:${r + flow.no}deg"></span>`).join("")}</div>`;
  }

  function board() {
    return `<div class="scene-board">${card(10, 14, 30, 28, -3)}${card(54, 12, 32, 30, 4)}${card(18, 56, 28, 26, 3)}${card(56, 58, 30, 24, -5)}<span class="pin" style="left:18%;top:18%"></span><span class="pin" style="left:62%;top:16%"></span><span class="note" style="left:39%;top:38%;--rot:3deg"></span></div>`;
  }

  function oralStage() {
    return `<div class="scene-stage"><span class="screen"></span><span class="podium"></span>${dot(68, 28)}${dot(78, 46)}${dot(22, 62)}</div>`;
  }

  function renderSceneCanvas(flow, slide) {
    const words = sceneWords[flow.id] || ["??", "??", "??", "??"];
    sceneLabelQueue = [...words, slide.kicker, flow.title, ...words, slide.sideTitle];
    const type = slide.visual;
    const flowSpecific = {
      topic: {
        cover: `${node("??", 8, 12)}${line(27, 24, 32, 18)}${node("??", 58, 32, 28, 20)}${dot(46, 48)}${node("??", 24, 66, 24, 18)}`,
        goals: `${node("???", 8, 12, 30)}${node("???", 56, 12, 30)}${node("???", 18, 62, 30)}${node("??", 62, 60, 24)}${line(24, 42, 48)}`,
        concept: `${node("????", 34, 36, 34, 22)}${line(16, 24, 28, 24)}${line(52, 58, 28, -20)}${dot(18, 16)}${dot(78, 66)}`,
        sequence: `${card(8, 12, 24, 26)}${card(38, 20, 24, 26)}${card(68, 30, 24, 26)}${line(30, 30, 42, 14)}${dot(20, 70)}`,
        activity: `${node("???", 8, 16, 30)}${node("??", 56, 18, 28)}${node("??", 28, 62, 28)}${chart(flow, [35, 58, 74, 44])}`,
        mistakes: `${node("??", 11, 14, 25)}${node("???", 56, 20, 30)}${node("???", 28, 62, 32)}${line(22, 48, 54, -8)}`,
        checklist: `${node("??", 8, 12, 24)}${node("???", 40, 12, 28)}${node("???", 70, 12, 28)}${node("??", 22, 62, 24)}${node("??", 58, 62, 24)}`,
        output: `${card(12, 16, 34, 44, -5)}${card(34, 10, 34, 44, 4)}${card(52, 22, 34, 44, -2)}${node("????", 28, 70, 44, 18)}`,
        next: `${node("??", 10, 40, 24)}${line(35, 49, 34)}${node("??", 68, 40, 24)}${dot(48, 38)}${dot(55, 58)}`
      },
      literature: {
        cover: `${card(9, 12, 25, 34, -4)}${card(38, 15, 25, 34, 2)}${card(66, 12, 25, 34, 5)}${node("??", 36, 64, 30)}`,
        goals: `${node("??", 8, 16, 24)}${node("??", 38, 16, 24)}${node("??", 68, 16, 24)}${line(20, 56, 58)}${dot(74, 52)}`,
        concept: `${node("??", 10, 18, 26)}${node("??", 62, 18, 26)}${node("??", 36, 58, 30)}${line(28, 31, 42)}${line(48, 50, 24, -25)}`,
        sequence: `${card(8, 12, 36, 22)}${card(8, 42, 36, 22)}${card(56, 12, 36, 22)}${card(56, 42, 36, 22)}${line(42, 31, 16)}${line(42, 60, 16)}`,
        activity: `${node("???", 10, 12, 28)}${node("???", 58, 12, 28)}${node("??", 16, 62, 24)}${node("??", 62, 62, 24)}`,
        mistakes: `${card(14, 18, 34, 40, -6)}${node("????", 50, 36, 38)}${line(32, 68, 48, -12)}`,
        checklist: `${node("??", 10, 12, 24)}${node("??", 40, 12, 24)}${node("??", 70, 12, 24)}${node("??", 25, 62, 24)}${node("??", 56, 62, 24)}`,
        output: `${card(10, 14, 34, 52, -3)}${card(46, 14, 34, 52, 3)}${line(38, 42, 24)}${node("??", 34, 72, 30)}`,
        next: `${node("??", 10, 40, 26)}${line(36, 49, 32)}${node("??", 68, 40, 26)}${dot(48, 30)}${dot(56, 64)}`
      },
      motivation: {
        cover: `${plant(flow)}${node("??", 8, 18, 24)}${node("??", 62, 20, 24)}${node("??", 38, 70, 24)}`,
        goals: `${node("??", 10, 14, 24)}${node("??", 40, 35, 24)}${node("??", 70, 58, 24)}${line(31, 27, 22, 34)}${line(55, 49, 22, 34)}`,
        concept: `${node("??", 8, 14, 24)}${node("??", 38, 14, 24)}${node("??", 68, 14, 24)}${node("??", 38, 62, 24)}${line(28, 26, 44)}`,
        sequence: `${card(8, 12, 20, 46)}${card(30, 18, 20, 46)}${card(52, 24, 20, 46)}${card(74, 30, 18, 42)}${line(22, 72, 58)}`,
        activity: `${node("??", 10, 16, 24)}${node("??", 56, 18, 24)}${node("??", 18, 62, 24)}${node("??", 62, 62, 24)}`,
        mistakes: `${node("???", 12, 18, 30)}${node("???", 58, 22, 30)}${node("????", 30, 64, 36)}${line(22, 48, 55, 8)}`,
        checklist: `${node("??", 10, 13, 24)}${node("??", 40, 13, 24)}${node("??", 70, 13, 24)}${node("??", 40, 62, 24)}${dot(49, 44)}`,
        output: `${card(18, 14, 56, 58, 0)}${node("150-250?", 30, 32, 42, 18)}${dot(22, 18)}${dot(74, 64)}`,
        next: `${node("??", 10, 40, 26)}${line(36, 49, 32)}${node("??", 68, 40, 26)}${plant(flow)}`
      },
      design: {
        cover: `${lab(flow)}${node("???", 8, 16, 28)}${node("???", 62, 16, 28)}${node("??", 38, 70, 24)}`,
        goals: `${node("??", 8, 12, 24)}${node("??", 38, 12, 24)}${node("??", 68, 12, 24)}${node("??", 38, 62, 24)}${line(28, 25, 45)}`,
        concept: `${lab(flow)}${line(18, 70, 60)}${node("??", 34, 12, 28)}${node("???", 56, 62, 32)}`,
        sequence: `${node("??", 8, 16, 22)}${line(29, 25, 16)}${node("??", 43, 16, 22)}${line(64, 25, 16)}${node("??", 76, 16, 22)}${lab(flow)}`,
        activity: `${node("???", 10, 16, 28)}${node("???", 58, 18, 28)}${node("??", 16, 62, 24)}${node("??", 62, 62, 24)}`,
        mistakes: `${lab(flow)}${node("????", 42, 18, 38)}${line(36, 50, 46, -18)}`,
        checklist: `${node("???", 8, 14, 28)}${node("???", 38, 14, 28)}${node("??", 68, 14, 24)}${node("??", 22, 62, 24)}${node("??", 58, 62, 24)}`,
        output: `${card(10, 12, 34, 52, -3)}${lab(flow)}${node("???", 48, 68, 30)}`,
        next: `${node("??", 10, 40, 26)}${line(36, 49, 32)}${node("??", 68, 40, 26)}${lab(flow)}`
      },
      data: {
        cover: `${chart(flow, [38, 72, 55, 88])}${node("??", 10, 12, 24)}${node("??", 64, 12, 24)}`,
        goals: `${chart(flow, [42, 52, 78, 66])}${node("??", 8, 16, 24)}${node("??", 66, 62, 24)}`,
        concept: `${node("??", 9, 14, 24)}${line(30, 24, 20)}${node("??", 45, 34, 24)}${line(63, 45, 20)}${node("??", 72, 58, 24)}${chart(flow, [24, 42, 66, 84])}`,
        sequence: `${card(8, 12, 30, 44)}${chart(flow, [34, 62, 48, 80])}${node("???", 52, 68, 34)}`,
        activity: `${node("??", 10, 16, 24)}${node("??", 58, 18, 24)}${node("??", 18, 62, 24)}${node("??", 62, 62, 24)}`,
        mistakes: `${chart(flow, [80, 20, 64, 32])}${node("???", 48, 24, 32)}${line(38, 58, 44, -14)}`,
        checklist: `${node("??", 8, 13, 24)}${node("??", 38, 13, 24)}${node("??", 68, 13, 24)}${node("??", 22, 62, 24)}${node("??", 58, 62, 24)}`,
        output: `${chart(flow, [46, 68, 38, 90])}${card(10, 12, 30, 52)}${node("???", 52, 70, 30)}`,
        next: `${node("??", 10, 40, 26)}${line(36, 49, 32)}${node("??", 68, 40, 26)}${chart(flow, [50, 64, 82, 48])}`
      },
      discussion: {
        cover: `${node("??", 8, 18, 24)}${node("??", 38, 36, 24)}${node("??", 68, 56, 24)}${line(28, 29, 42, 25)}${dot(50, 48)}`,
        goals: `${node("??", 8, 14, 24)}${node("??", 38, 14, 24)}${node("??", 68, 14, 24)}${chart(flow, [36, 52, 68, 44])}`,
        concept: `${node("???", 15, 24, 32)}${line(44, 34, 22)}${node("????", 58, 44, 34)}${dot(48, 52)}`,
        sequence: `${node("??", 8, 16, 22)}${node("??", 32, 24, 22)}${node("??", 56, 32, 22)}${node("??", 76, 40, 22)}${line(26, 29, 54, 12)}`,
        activity: `${node("??", 10, 16, 24)}${node("??", 56, 18, 24)}${node("??", 18, 62, 24)}${node("??", 62, 62, 24)}`,
        mistakes: `${node("??", 12, 18, 26)}${node("???", 58, 22, 30)}${node("???", 30, 64, 30)}${line(22, 50, 54)}`,
        checklist: `${node("???", 8, 13, 28)}${node("???", 38, 13, 28)}${node("???", 68, 13, 28)}${node("???", 22, 62, 28)}${node("???", 58, 62, 28)}`,
        output: `${card(14, 16, 28, 48, -3)}${card(48, 16, 34, 48, 3)}${node("3-6?", 36, 70, 28)}`,
        next: `${node("??", 10, 40, 26)}${line(36, 49, 32)}${node("???", 66, 40, 30)}${dot(50, 30)}${dot(56, 62)}`
      },
      report: {
        cover: `${board()}${node("???", 36, 70, 30)}`,
        goals: `${card(8, 12, 25, 40)}${card(38, 12, 25, 40)}${card(68, 12, 25, 40)}${node("???", 34, 64, 32)}`,
        concept: `${node("??", 10, 14, 24)}${node("??", 38, 14, 24)}${node("??", 66, 14, 24)}${node("??", 38, 62, 24)}${line(28, 26, 44)}`,
        sequence: `${card(8, 12, 20, 52)}${card(31, 12, 20, 52)}${card(54, 12, 20, 52)}${card(77, 12, 16, 52)}${line(18, 72, 64)}`,
        activity: `${node("??", 10, 16, 24)}${node("??", 56, 18, 24)}${node("??", 18, 62, 24)}${node("??", 62, 62, 24)}`,
        mistakes: `${card(14, 14, 38, 56, -4)}${node("????", 54, 34, 34)}${line(36, 62, 44, -8)}`,
        checklist: `${node("300?", 8, 13, 24)}${node("??", 38, 13, 24)}${node("??", 68, 13, 24)}${node("??", 22, 62, 24)}${node("??", 58, 62, 24)}`,
        output: `${board()}${card(56, 20, 30, 48, 4)}${node("??", 36, 72, 26)}`,
        next: `${node("???", 8, 40, 30)}${line(38, 49, 30)}${node("??", 70, 40, 24)}${board()}`
      },
      oral: {
        cover: `${oralStage()}${node("??", 62, 14, 24)}${node("??", 70, 62, 24)}`,
        goals: `${oralStage()}${node("??", 8, 16, 24)}${node("??", 64, 18, 24)}${node("??", 18, 62, 24)}`,
        concept: `${node("??", 10, 14, 24)}${node("??", 38, 14, 24)}${node("??", 66, 14, 24)}${node("??", 38, 62, 24)}${line(28, 26, 44)}`,
        sequence: `${node("??", 8, 16, 22)}${node("??", 32, 24, 22)}${node("??", 56, 32, 22)}${node("??", 76, 40, 22)}${oralStage()}`,
        activity: `${node("??", 10, 16, 24)}${node("??", 56, 18, 24)}${node("??", 18, 62, 24)}${node("??", 62, 62, 24)}`,
        mistakes: `${oralStage()}${node("???", 46, 18, 30)}${node("???", 54, 58, 30)}`,
        checklist: `${node("??", 8, 13, 24)}${node("??", 38, 13, 24)}${node("??", 68, 13, 24)}${node("??", 22, 62, 24)}${node("??", 58, 62, 24)}`,
        output: `${oralStage()}${card(58, 18, 28, 46, 4)}${node("??", 58, 70, 24)}`,
        next: `${node("??", 10, 40, 26)}${line(36, 49, 32)}${node("??", 68, 40, 26)}${oralStage()}`
      }
    };
    return (flowSpecific[flow.id] && flowSpecific[flow.id][type]) || `${node(words[0], 12, 18)}${node(words[1], 58, 18)}${node(words[2], 18, 62)}${node(words[3], 62, 62)}${line(28, 31, 44)}`;
  }

  function renderVisual(type, flow, slide) {
    const order = visualOrder.indexOf(type) + 1;
    const labels = (sceneWords[flow.id] || []).slice(0, 4);
    return `
      <div class="slide-visual css-scene scene-${flow.id}-${type}" style="${sceneTheme(flow, slide)}" aria-label="${escapeHtml(flow.title)}：${escapeHtml(slide.kicker)}插圖">
        <div class="scene-title">
          <span>${escapeHtml(flow.title)}</span>
          <span class="scene-number">${flow.no}-${order}</span>
        </div>
        <div class="scene-canvas">
          ${renderSceneCanvas(flow, slide)}
        </div>
        <div class="scene-labels">
          ${labels.map((label) => `<span>${escapeHtml(label)}</span>`).join("")}
        </div>
      </div>
    `;
  }

  function renderSlide() {
    const deck = decks[deckIndex];
    const externalDeck = externalDecks[deck.id];
    deckSelect.value = String(deckIndex);
    renderProgress(deck);
    slideEl.classList.toggle("external-slide", Boolean(externalDeck));
    deckControls?.classList.toggle("external-mode", Boolean(externalDeck));
    if (slideHint) {
      slideHint.textContent = externalDeck
        ? "這份簡報使用原始 HTML 檔呈現，頁數與播放控制以內嵌簡報為準。"
        : "提示：鍵盤 ← → 可翻頁，Esc 可離開全螢幕。";
    }

    if (externalDeck) {
      prevBtn.hidden = true;
      nextBtn.hidden = true;
      slideEl.innerHTML = `
        <iframe
          class="external-deck-frame"
          src="${escapeHtml(externalDeck.src)}"
          title="${escapeHtml(deck.title)}"
          loading="lazy"
          allowfullscreen></iframe>
      `;
      return;
    }

    prevBtn.hidden = false;
    nextBtn.hidden = false;
    const slide = deck.slides[slideIndex];
    slideEl.innerHTML = `
      <div class="web-slide-head">
        <div>
          <p class="web-slide-kicker">${escapeHtml(slide.kicker)}</p>
          <h3>${escapeHtml(slide.title)}</h3>
        </div>
        <div class="slide-count">${slideIndex + 1} / ${deck.slides.length}</div>
      </div>
      <div class="web-slide-body">
        <div class="slide-main">
          <p>${escapeHtml(slide.main)}</p>
          <ul class="slide-list">
            ${slide.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>
        <aside class="slide-side">
          <b>${escapeHtml(slide.sideTitle)}</b>
          <p>${escapeHtml(slide.side)}</p>
          ${renderVisual(slide.visual, deck, slide)}
        </aside>
      </div>
      <div class="web-slide-foot">
        <span>${escapeHtml(deck.title)}</span>
        <span>科展指導教學網站</span>
      </div>
    `;
  }

  function moveSlide(delta) {
    const deck = decks[deckIndex];
    if (externalDecks[deck.id]) return;
    slideIndex += delta;
    if (slideIndex < 0) {
      deckIndex = (deckIndex - 1 + decks.length) % decks.length;
      slideIndex = decks[deckIndex].slides.length - 1;
    } else if (slideIndex >= deck.slides.length) {
      deckIndex = (deckIndex + 1) % decks.length;
      slideIndex = 0;
    }
    renderSlide();
  }

  renderOptions();
  renderSlide();

  deckSelect.addEventListener("change", () => {
    deckIndex = Number(deckSelect.value);
    slideIndex = 0;
    renderSlide();
  });

  progressList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-slide-jump]");
    if (!button) return;
    slideIndex = Number(button.dataset.slideJump);
    renderSlide();
  });

  prevBtn.addEventListener("click", () => moveSlide(-1));
  nextBtn.addEventListener("click", () => moveSlide(1));
  fullBtn.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      stage.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  });

  document.addEventListener("keydown", (event) => {
    const activeTag = document.activeElement?.tagName;
    if (activeTag === "INPUT" || activeTag === "TEXTAREA" || activeTag === "SELECT") return;
    if (externalDecks[decks[deckIndex].id]) return;
    if (event.key === "ArrowRight") moveSlide(1);
    if (event.key === "ArrowLeft") moveSlide(-1);
  });
})();
