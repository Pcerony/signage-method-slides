(() => {
  'use strict';
  const get = id => document.getElementById(id);
  const mainSteps = [...document.querySelectorAll('[data-step]')];
  const detailButtons = [...document.querySelectorAll('[data-detail]')];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');

  const labels = {
    'step-practice': ['Join co-design', '共创实践'],
    'step-gaps': ['Identify gaps', '识别问题'],
    'step-prototype': ['Build prototypes', '开发原型'],
    'step-validation': ['Validate tools', '验证工具'],
    study: ['Pre-workshop study', '事前学习'],
    field: ['Site visits & research', '实地考察与调研'],
    focus: ['Problem mapping & focus groups', '问题梳理与焦点小组'],
    design: ['Prototype design', '原型设计'],
    testing: ['Prototype testing', '原型测试'],
    'name-i': ['I · Early diagnosis', 'I · 前期诊断'],
    'name-ii': ['II · Field evaluation', 'II · 后期实地评估'],
    'trial-i': ['ARS-based trial', '基于 ARS 原则的试用'],
    'validation-i': ['Expert feedback', '专家反馈'],
    'trial-ii': ['Field comparison', '实地对照实验'],
    'validation-ii': ['Eye-tracking analysis', '眼动数据分析'],
    'feedback-ii': ['User feedback', '用户反馈'],
  };

  const japaneseLabels = {
    'step-practice': '共創に参加',
    'step-gaps': '課題を見つける',
    'step-prototype': 'ツールを作る',
    'step-validation': 'ツールを確かめる',
    study: '事前学習',
    field: '現地を見る',
    focus: '話し合い・課題整理',
    design: 'サインを作る',
    testing: 'サインを試す',
    'name-i': 'I · 設計前の確認',
    'name-ii': 'II · 現地での評価',
    'trial-i': 'ARSルールで試用',
    'validation-i': '専門家の意見',
    'trial-ii': '現地で比較',
    'validation-ii': '視線の分析',
    'feedback-ii': '参加者の声',
  };

  const reading = {
    0: [
      'Research method', '研究方法', '研究方法',
      'How can we improve the way people co-design interpretive signs in public spaces? This study follows design science research (DSR) and action design research (ADR): participate in co-design, identify problems in the process, build tools to address them, and test whether those tools are useful in practice.',
      '这项研究想改善在植物园一起制作解说标识的方法：参与共创，找到问题，做工具，再到现场看看工具是否好用。',
    ],
    1: [
      'Co-design in practice', '共創に参加', '共创实践',
      'The co-design process begins with studying the topic before the workshop, then moves through site visits and field research. Participants use focus groups to make sense of the problems they find, develop prototype signs, and test them. The study examines what happens at each step in the botanical garden case.',
      '先学习主题，到现场看标识，再分组讨论问题。之后做出新标识，到现场试一试。',
    ],
    2: [
      'Two gaps in the workflow', '二つの課題', '两个问题',
      'During problem mapping, workshop discussion can stay at the level of personal impressions because participants lack a shared way to diagnose existing signs. During prototype testing, it is hard to observe reading without disrupting it, or to tell what information drew attention. These gaps motivate two independent tools: I for early diagnosis and II for field evaluation.',
      '一是缺少共同的规则来判断现有标识哪里需要改。二是很难在不打扰读者的情况下，知道他们看了哪里。两个问题分别对应一套工具。',
    ],
    3: [
      'Tools built for the two gaps', '二つのツール', '两套工具',
      'The first tool uses image-based thematic analysis. The second uses quantitative, contactless eye tracking.',
      '两套工具用的是不同方法：I 对标识图像做主题分析；II 用非接触眼动追踪做定量分析。',
    ],
    'prototype-i': [
      'I · Signage Annotator', '画像からテーマを分析する', 'I · Signage Annotator',
      'A qualitative tool for image-based thematic analysis of a signage system. Multiple analysts can code sign images using shared rules and produce a quantitative report across the system.',
      '这是一个基于图像的定性主题分析工具，面向整个标识系统。实验者与标识专家等多位分析者可按共同规则标注图片，并把结果汇总成量化报告。',
    ],
    'prototype-ii': [
      'II · SIGN Visual Attention', '視線を数値で分析する', 'II · SIGN Visual Attention',
      'A quantitative tool that uses contactless eye tracking to record and analyze how people look at physical signs in the field.',
      '这是一个定量分析工具。研究者用非接触眼动追踪记录参与者看标识时的视线，再用这些数据做定量分析。参与者不需要佩戴设备。',
    ],
    4: [
      'Validate the tools independently', 'ツールを確かめる', '分别验证工具',
      'Tool I uses ARS-based coding and expert feedback. Tool II combines gaze analysis and user feedback following a field comparison.',
      '工具 I 用现有标识试用。工具 II 到现场用两种标识做对照实验。',
    ],
    'trial-i': [
      'ARS-based trial', 'I · ARSルールで試用', 'I · 基于 ARS 原则的试用',
      'The experimenter and signage expert apply the ARS coding rules to existing signs.',
      'ARS 是记录标识特点的规则。实验者与标识专家按这套规则记录了植物园现有标识的特点。',
    ],
    'validation-i': [
      'Expert feedback', 'I · 専門家の意見', 'I · 专家反馈',
      'The evaluation considers ease of use and whether the coding output helps identify problems in existing signs.',
      '通过专家反馈，了解工具是否好用，以及记录能不能帮助找出标识的问题。',
    ],
    'trial-ii': [
      'Field comparison', 'II · 現地で比較', 'II · 实地对照实验',
      'Participants view contrasting physical signs while the researcher records their gaze without contact.',
      '请参与者在现场看两种标识，并记录视线。之后通过眼动数据分析和用户反馈来验证工具。',
    ],
    'validation-ii': [
      'II · Field evaluation', 'II · 視線の分析', 'II · 眼动数据分析',
      'The field test uses gaze data collected from contrasting physical signs. The analysis couples information entropy with spatial structure to relate viewing behaviour to where different information is located on the signs. The goal is to test whether tool II can diagnose differences in information processing, not to prove that one sign is better.',
      '用信息熵和信息的位置分析视线数据，看看工具能否分辨人们看不同标识时的差异。',
    ],
    'feedback-ii': [
      'User feedback', 'II · 参加者の声', 'II · 用户反馈',
      'Participant feedback helps assess whether the setup is feasible in the field.',
      '听取参与者的反馈，了解记录视线的过程有没有影响他们正常看标识。',
    ],
  };

  const japaneseCopy = {
    0: '植物園の解説サインを、みんなで作る方法を考えました。共創に参加し、課題を見つけ、ツールを作り、現場で使えるかを確かめます。',
    1: 'テーマを学び、現地のサインを見ます。グループで話し合い、課題を整理します。そのあと、新しいサインを作って現地で試します。',
    2: '今あるサインの課題を話し合うには、共通のルールが必要でした。また、新しいサインを試すときは、読む人のじゃまをせず、どこを見たかを知る必要がありました。',
    3: '二つのツールは、異なる方法を使います。I は写真を使ったテーマ分析、II は視線データを使った定量分析です。',
    'prototype-i': 'サインの画像を使う質的なテーマ分析ツールです。実験者とサインの専門家など、複数の人が同じルールで分析できます。植物園のサイン全体の傾向を数値でまとめたレポートを作れます。',
    'prototype-ii': '非接触の視線計測を使う定量分析ツールです。参加者は機器を身につけずにサインを見ます。記録した視線を数値で分析します。',
    4: 'ツール I は今あるサインで試します。ツール II は現地で二種類のサインを比べて試します。',
    'trial-i': 'ARS はサインの特徴を記録するためのルールです。実験者とサインの専門家が、植物園のサインをこのルールで記録しました。',
    'validation-i': '専門家の意見から、操作しやすいか、記録を見てサインの課題が分かるかを確かめます。',
    'trial-ii': '現地で二種類のサインを見てもらい、視線を記録しました。その後、視線の分析と参加者の声から、ツールを確かめます。',
    'validation-ii': '視線のデータから、どの情報に目が向いたかを調べます。情報エントロピーと情報の位置を使い、ツールが見方の違いを捉えられるかを見ます。',
    'feedback-ii': '参加者の声を聞き、計測が読むじゃまにならなかったかを確かめます。',
  };

  const englishTerms = {
    0: 'Research Method · DSR / ADR',
    1: 'Co-design',
    2: 'Workflow Gaps',
    3: 'Tool Prototypes',
    4: 'Tool Validation',
    'prototype-i': 'Image-based Thematic Analysis',
    'prototype-ii': 'Contactless Eye Tracking · Quantitative Analysis',
    'trial-i': 'ARS Coding Rules',
    'validation-i': 'Expert Feedback',
    'trial-ii': 'On-site Comparison',
    'validation-ii': 'Information Entropy · Spatial Coupling',
    'feedback-ii': 'User Feedback',
  };

  const mediaByNode = {
    'prototype-i': [['signage-annotator.jpg', 'Signage Annotator 编码界面', 'Signage Annotator のコーディング画面']],
    'prototype-ii': [['sign-visual-attention.png', 'SIGN Visual Attention 操作界面', 'SIGN Visual Attention の操作画面']],
    'trial-ii': [
      ['control-sign.jpg', '对照条件的实验标识', '対照条件の実験用サイン'],
      ['intervention-sign.jpg', '另一对照条件的实验标识', 'もう一つの比較条件の実験用サイン'],
    ],
  };

  let lang = new URLSearchParams(location.search).get('lang') === 'zh' ? 'zh' : 'ja-en';
  let target = 0;
  let shown = 0;
  let selected = 0;
  const openEvidence = new Set();
  let timer;
  let readingKey;
  const running = new Map();
  const timing = { duration: 360, easing: 'cubic-bezier(.2, .75, .25, 1)' };

  function reveal(id, visible) {
    const node = get(id);
    if (reduced.matches) {
      running.get(node)?.forEach(animation => animation.cancel());
      running.delete(node);
      node.dataset.visible = String(visible);
      node.toggleAttribute('hidden', !visible);
      node.removeAttribute('inert');
      return;
    }
    if (node.dataset.visible === String(visible)) return;
    node.dataset.visible = String(visible);
    if (!visible && node.hasAttribute('hidden')) return;
    const previous = running.get(node);
    const paths = [...node.querySelectorAll('.draw')];
    const hidden = node.hasAttribute('hidden');
    const before = paths.length
      ? paths.map(path => hidden ? '1' : getComputedStyle(path).strokeDashoffset)
      : [hidden ? '0' : getComputedStyle(node).opacity];
    const entryTransform = id === 'workflow-line' ? 'scaleX(0)' : 'translateY(8px)';
    const transform = hidden ? entryTransform : getComputedStyle(node).transform;
    previous?.forEach(animation => animation.cancel());
    node.removeAttribute('hidden');
    node.toggleAttribute('inert', !visible);
    const duration = visible ? timing.duration : 245;
    const active = paths.length ? paths.map((path, index) => path.animate([
      { strokeDasharray: '1 1', strokeDashoffset: before[index] },
      { strokeDasharray: '1 1', strokeDashoffset: visible ? 0 : 1 },
    ], { ...timing, duration, fill: 'both' })) : [node.animate([
      { opacity: before[0], transform },
      { opacity: visible ? 1 : 0, transform: visible ? 'none' : entryTransform },
    ], {
      ...timing, duration, fill: 'both',
      delay: visible && hidden && node.classList.contains('track') ? 85 : 0,
    })];
    running.set(node, active);
    Promise.all(active.map(animation => animation.finished)).then(() => {
      if (running.get(node) !== active) return;
      node.toggleAttribute('hidden', !visible);
      running.delete(node);
      active.forEach(animation => animation.cancel());
    }).catch(() => {});
  }

  function paintReading() {
    const key = lang + ':' + selected;
    if (readingKey === key) return;
    const first = readingKey === undefined;
    readingKey = key;
    const [, ja, zh, , copyZh] = reading[selected];
    const heading = get('reader-title');
    heading.textContent = lang === 'zh' ? zh : ja;
    if (lang !== 'zh') {
      const annotation = document.createElement('span');
      annotation.lang = 'en';
      annotation.textContent = englishTerms[selected];
      heading.append(annotation);
    }
    const copy = get('reader-copy');
    copy.textContent = lang === 'zh' ? copyZh : japaneseCopy[selected];
    const media = get('reader-media');
    const items = mediaByNode[selected] ?? [];
    media.replaceChildren(...items.map(([filename, zhAlt, jaAlt]) => {
      const link = document.createElement('a');
      const image = document.createElement('img');
      link.href = './assets/method-map/' + filename;
      link.target = '_blank';
      link.rel = 'noopener';
      image.src = link.href;
      image.alt = lang === 'zh' ? zhAlt : jaAlt;
      link.append(image);
      return link;
    }));
    media.hidden = items.length === 0;
    get('reader').scrollTop = 0;
    if (!first && !reduced.matches) {
      for (const node of [heading, copy, ...(items.length ? [media] : [])]) {
        node.getAnimations().forEach(animation => animation.cancel());
        node.animate([{ opacity: .45, transform: 'translateY(5px)' }, { opacity: 1, transform: 'none' }], { ...timing, duration: 210 });
      }
    }
  }

  function paint() {
    const set = (ids, visible) => ids.forEach(id => reveal(id, visible));
    const map = get('map');
    map.toggleAttribute('data-quiet-workflow', shown >= 3);
    const tool = typeof selected === 'string' && selected.match(/-(ii?)$/)?.[1];
    if (tool) map.dataset.focusTool = tool;
    else delete map.dataset.focusTool;
    set(['practice', 'practice-lines', 'workflow-line'], shown >= 1);
    ['focus', 'testing'].forEach(id => get(id).toggleAttribute('data-gap', shown >= 1.5));
    set(['tool-i', 'tool-ii', 'tool-lines'], shown >= 2);
    set(['prototype-i', 'prototype-ii', 'prototype-lines'], shown >= 3);
    set(['trial-i', 'trial-ii', 'trial-lines'], shown >= 4);
    const evidenceI = shown >= 4 && openEvidence.has('trial-i');
    const evidenceII = shown >= 4 && openEvidence.has('trial-ii');
    set(['validation-i', 'validation-lines-i'], evidenceI);
    set(['validation-ii', 'validation-lines-ii', 'feedback-track'], evidenceII);
    get('trial-i').setAttribute('aria-expanded', String(evidenceI));
    get('trial-ii').setAttribute('aria-expanded', String(evidenceII));
    const section = target;
    get('spine').toggleAttribute('data-active', section > 0);
    get('spine').style.setProperty('--active-step', Math.max(0, section - 1));
    mainSteps.forEach(button => {
      const step = Number(button.dataset.step);
      button.setAttribute('aria-pressed', String(step === section));
      button.setAttribute('aria-expanded', String(step <= shown));
    });
    detailButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.detail === selected)));
    paintReading();
  }

  function choose(step) {
    clearTimeout(timer);
    openEvidence.clear();
    target = step;
    selected = step;
    if (step <= shown || reduced.matches) {
      shown = step;
      paint();
      return;
    }
    function advance() {
      shown = [1, 1.5, 2, 3, 4].find(stage => stage > shown);
      paint();
      if (shown < target) timer = setTimeout(advance, shown === 1.5 ? 240 : 360);
    }
    advance();
  }

  function translate() {
    const zh = lang === 'zh';
    document.documentElement.lang = zh ? 'zh' : 'ja';
    document.title = '研究方法';
    Object.entries(labels).forEach(([id, pair]) => {
      const node = get(id);
      const text = zh ? pair[1] : japaneseLabels[id];
      if (node.closest('#practice') || node.matches('[data-detail]')) {
        const label = document.createElement('span');
        label.className = 'track-label';
        label.textContent = text;
        node.replaceChildren(label);
      } else node.textContent = text;
    });
    get('map').setAttribute('aria-label', zh ? '研究方法图' : '研究方法の構成図');
    get('spine').setAttribute('aria-label', zh ? '研究方法主轴' : '研究方法の主軸');
    get('practice').setAttribute('aria-label', zh ? '共创流程' : '共創の流れ');
    for (const tool of ['i', 'ii']) {
      const name = get('name-' + tool);
      const fullName = name.textContent;
      name.textContent = fullName.split(' · ')[1];
      get('tool-' + tool).setAttribute('aria-label', fullName);
    }
    document.querySelector('main').setAttribute('aria-label', document.title);
  }

  mainSteps.forEach(button => button.addEventListener('click', () => choose(Number(button.dataset.step))));
  detailButtons.forEach(button => button.addEventListener('click', () => {
    selected = button.dataset.detail;
    if (selected === 'trial-i' || selected === 'trial-ii') openEvidence.add(selected);
    paint();
  }));
  function switchLanguage() {
    lang = lang === 'zh' ? 'ja-en' : 'zh';
    const url = new URL(location.href);
    url.searchParams.set('lang', lang);
    url.hash = '';
    history.replaceState(null, '', url);
    translate();
    paintReading();
  }
  window.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !event.repeat && !event.defaultPrevented) {
      event.preventDefault();
      switchLanguage();
    }
  });
  reduced.addEventListener('change', () => {
    if (!reduced.matches) return;
    clearTimeout(timer);
    for (const id of ['reader-title', 'reader-copy', 'reader-media']) {
      get(id).getAnimations().forEach(animation => animation.cancel());
    }
    shown = target;
    paint();
  });
  translate();
  paint();
})();
