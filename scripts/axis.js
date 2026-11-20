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
      'Design Science Research', 'デザイン科学研究（DSR）\nアクションデザイン研究（ADR）', '设计科学研究（DSR）\n行动设计研究（ADR）',
      'How can we improve the way people co-design interpretive signs in public spaces? This study follows design science research (DSR) and action design research (ADR): participate in co-design, identify problems in the process, build tools to address them, and test whether those tools are useful in practice.',
      '本研究采用设计科学研究（Design Science Research，DSR），也借鉴行动设计研究（Action Design Research，ADR）在实践现场开发和评估工具的做法。为了改善植物园解说标识的共创，我先参与现场实践，找出难以判断的环节，再为这些问题开发工具，最后回到现场检验工具能否帮助判断。',
    ],
    1: [
      'Field participation', '現場への参加と観察', '现场参与与观察',
      'The co-design process begins with studying the topic before the workshop, then moves through site visits and field research. Participants use focus groups to make sense of the problems they find, develop prototype signs, and test them. The study examines what happens at each step in the botanical garden case.',
      '共创先从事前学习和现场调查开始。参与者观察标识和周围环境，再在小组里交换看法、整理需要解决的问题。接着设计标识原型，在现场试一试。研究者参加了这套流程，重点观察哪些环节需要更可靠的判断依据。',
    ],
    2: [
      'Two research gaps', '二つの研究課題', '两个研究问题',
      'During problem mapping, workshop discussion can stay at the level of personal impressions because participants lack a shared way to diagnose existing signs. During prototype testing, it is hard to observe reading without disrupting it, or to tell what information drew attention. These gaps motivate two independent tools: I for early diagnosis and II for field evaluation.',
      '讨论现有标识时，大家的判断容易停留在个人感受，需要一套共同规则来比较和记录问题。到现场测试新标识时，又很难在不打扰读者的情况下，知道他们看了哪些内容。前一个问题关系到怎么开始设计，后一个关系到怎么评估；因此分别开发了两套工具。',
    ],
    3: [
      'Qualitative and quantitative tool development', '質的・定量分析ツールの開発', '定性与定量工具开发',
      'The first tool uses image-based thematic analysis. The second uses quantitative, contactless eye tracking.',
      '两套工具用的是不同方法。I 对标识图像做定性主题分析，再把整个标识系统的分析结果汇总成量化报告，供设计前讨论。II 用非接触眼动追踪记录实际观看行为，再进行定量分析，供设计后的现场评估。两者处理的问题不同，可以各自使用。',
    ],
    'prototype-i': [
      'I · Signage Annotator', '画像からテーマを分析する', 'I · Signage Annotator',
      'A qualitative tool for image-based thematic analysis of a signage system. Multiple analysts can code sign images using shared rules and produce a quantitative report across the system.',
      '这是一个基于图像的定性主题分析工具，面向整个标识系统。实验者与标识专家等多位分析者可按共同规则标注图片，把各块标识中观察到的特点归入主题。工具将多块标识的标注结果汇总成量化报告，帮助团队从系统层面看到哪些特点常见、哪些地方值得进一步讨论。量化报告来自对图像的定性判断，两者并不矛盾。',
    ],
    'prototype-ii': [
      'II · SIGN Visual Attention', '視線を数値で分析する', 'II · SIGN Visual Attention',
      'A quantitative tool that uses contactless eye tracking to record and analyze how people look at physical signs in the field.',
      '这是一个定量分析工具。研究者用非接触眼动追踪记录参与者看标识时的视线，再用这些数据做定量分析。参与者不需要佩戴或操作设备，可以按平常的方式观看实体标识。工具关注的是实际看到哪里；参与者反馈是在实验之后收集的补充验证证据，不是眼动数据本身。',
    ],
    4: [
      'Trial- and experiment-based validation', '試用と実験による検証', '基于试用与实验的验证',
      'Tool I uses ARS-based coding and expert feedback. Tool II combines gaze analysis and user feedback following a field comparison.',
      '工具 I 用植物园现有标识试用，看看共同的编码规则能不能变成实际可用的记录。工具 II 在现场用两种标识做对照实验，检验非接触采集和后续分析能否支持现场评估。两套工具各自验证，重点是工具是否有用，不是给标识设计排出好坏。',
    ],
    'trial-i': [
      'ARS-based trial', 'I · ARSルールで試用', 'I · 基于 ARS 原则的试用',
      'The experimenter and signage expert apply the ARS coding rules to existing signs.',
      '使用工具前，先把 ARS 原则变成统一的编码规则。实验者与标识专家共同操作 Signage Annotator，把植物园现有标识的图像导入工具，再按同一套规则标记看到的特点。这样得到的记录可以放在一起比较，也为随后评价编码过程和结果提供依据。',
    ],
    'validation-i': [
      'Expert feedback', 'I · 専門家の意見', 'I · 专家反馈',
      'The evaluation considers ease of use and whether the coding output helps identify problems in existing signs.',
      '试用只是把工具实际用了一遍。之后结合标识专家的反馈，看看操作是否清楚、编码记录是否容易理解，以及这些记录能否帮助找出标识的问题。这里要评价的是工具在共创前期是否好用、是否能辅助诊断，并不是重新验证 ARS 原则。',
    ],
    'trial-ii': [
      'Field comparison', 'II · 現地で比較', 'II · 实地对照实验',
      'Participants view contrasting physical signs while the researcher records their gaze without contact.',
      '参与者在真实场地观看两种实体标识，研究者操作 SIGN Visual Attention，在不让参与者佩戴设备的情况下记录视线。两个对照条件提供了检验工具能否捕捉观看差别的机会。实验后分别分析眼动数据、听取用户反馈，从数据与体验两方面验证工具。',
    ],
    'validation-ii': [
      'II · Field evaluation', 'II · 視線の分析', 'II · 眼动数据分析',
      'The field test uses gaze data collected from contrasting physical signs. The analysis couples information entropy with spatial structure to relate viewing behaviour to where different information is located on the signs. The goal is to test whether tool II can diagnose differences in information processing, not to prove that one sign is better.',
      '分析以现场记录的视线为起点。将注视位置与标识上的文字、图片等信息区域对应，并结合信息熵与信息的空间分布，查看注意力落在什么内容上。这样检验的是工具能否辨析两种情况下的观看差异，而不是宣布某一块标识更好。',
    ],
    'feedback-ii': [
      'User feedback', 'II · 参加者の声', 'II · 用户反馈',
      'Participant feedback helps assess whether the setup is feasible in the field.',
      '眼动记录能告诉我们人看了哪里，但不能单独说明测试过程让人感觉如何。实验后听取参与者的反馈，了解流程是否容易理解、设备和记录过程有没有影响正常观看。反馈与眼动分析相互补充，分别帮助判断工具在现场是否可行。',
    ],
  };

  const japaneseCopy = {
    0: '研究方法はデザイン科学研究（Design Science Research、DSR）です。現場でツールを作って試す点では、アクション・デザイン・リサーチ（Action Design Research、ADR）の考え方も取り入れています。植物園でサインを一緒に作る現場に参加し、判断が難しいところを調べました。次に、その課題に合ったツールを作り、現場で判断の助けになるかを確かめます。',
    1: 'まずテーマを学び、植物園でサインとその周りの環境を見ます。次に、グループで意見を出し合い、何を直すかを整理します。そのあと、新しいサインの試作案を作って現地で試します。研究者もこの流れに参加し、どの場面で判断のための情報が足りないかを見ました。',
    2: '一つ目は、今あるサインのどこを直すかを決める場面です。見方は人によって違うので、意見を比べるための共通のルールが必要でした。二つ目は、試作案を現地で試す場面です。読む人のじゃまをせず、どの情報を見たかを知る必要がありました。設計の前と後にある別々の課題なので、それぞれにツールを作りました。',
    3: '二つのツールは異なる方法を使います。I は写真を使った質的なテーマ分析です。その結果を数値でまとめ、サイン全体を見直す手がかりにします。II は視線データを使った定量分析です。作ったサインを現地で読んだときの見方を調べます。二つのツールは別々に使えます。',
    'prototype-i': 'サインの画像を使う質的なテーマ分析ツールです。実験者とサインの専門家など、複数の人が共通のルールで写真を見て、気づいた特徴をテーマごとに記録できます。複数のサインの記録を集め、植物園のサイン全体にどんな傾向があるかを数値でまとめたレポートを作れます。分析の出発点は画像を見て行う判断です。',
    'prototype-ii': '非接触の視線計測を使う定量分析ツールです。参加者は機器を身につけず、現地で実物のサインを見ます。研究者はそのときの視線を記録し、数値データとして分析します。参加者の感想は実験のあとに聞く別の情報で、ツールが記録する視線データとは区別します。',
    4: 'ツール I は、植物園にあるサインで試用します。共通のルールで記録できるか、その記録が設計前の話し合いに役立つかを確かめます。ツール II は、現地で二種類のサインを見比べる実験で試します。ここで検証するのはサインの優劣ではなく、それぞれのツールが現場で役に立つかどうかです。',
    'trial-i': 'まず、ARS 原則をサインの特徴を記録するためのルールにします。実験者とサインの専門家が、植物園にあるサインの画像を Signage Annotator に取り込み、そのルールに沿って特徴を記録します。同じルールで記録するので、複数のサインを見比べられます。この記録を見ながら、次に専門家の意見を聞きます。',
    'validation-i': '実際に使ったあとで、サインの専門家に意見を聞きます。たとえば、操作は分かりやすかったか、記録を見て今あるサインのどこを直せばよいか考えやすくなったかを確認します。ここで知りたいのは、ARS の優劣ではなく、ツールが設計前の話し合いや課題の整理に役立つかどうかです。',
    'trial-ii': '植物園の現地で、参加者に二種類の実物のサインを見てもらいます。研究者は SIGN Visual Attention を操作し、参加者が機器を身につけない状態で視線を記録します。二種類を比べるのは、見方の違いをツールが捉えられるかを確かめるためです。その後、視線の分析と参加者の声の二つから検証します。',
    'validation-ii': '現地で記録した視線を、サインの文字や写真など、情報が置かれた場所と対応させます。情報エントロピーと情報の位置を組み合わせ、どの内容に目が向いたか、二つのサインで見方がどう違ったかを調べます。目的は、ツールがその違いを捉えられるかを確かめることで、どちらのサインが優れているかを決めることではありません。',
    'feedback-ii': '視線データからは、参加者がどこを見たかが分かります。しかし、計測が読むじゃまになったかは、データだけでは分かりません。そこで実験後に参加者の声を聞き、手順が分かりやすかったか、ふだんと同じように読めたかを確かめます。視線の分析とは別に、現地で使えるかを参加者の側から考えるためです。',
  };

  const englishTerms = {
    0: 'Design Science Research · Action Design Research',
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

  const methodsByStep = {
    1: [
      ['实地调查', '问卷调查', '焦点小组', '现场观察'],
      ['現地調査', 'アンケート調査', 'フォーカスグループ', '現場観察'],
    ],
    2: [
      ['文献调查', '专家访谈'],
      ['文献調査', '専門家インタビュー'],
    ],
    3: [
      ['原型设计', '编码规则设计', '对照实验设计'],
      ['プロトタイプ設計', 'コーディングルールの設計', '比較実験の設計'],
    ],
    4: [
      ['工具试用', '实地对照实验', '专家访谈', '参与者访谈'],
      ['ツールの試用', '現地比較実験', '専門家インタビュー', '参加者インタビュー'],
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
    const annotation = get('reader-english');
    annotation.textContent = lang === 'zh' ? '' : englishTerms[selected];
    annotation.hidden = lang === 'zh';
    const copy = get('reader-copy');
    copy.textContent = lang === 'zh' ? copyZh : japaneseCopy[selected];
    const methods = get('reader-methods');
    const methodLabels = methodsByStep[selected]?.[lang === 'zh' ? 0 : 1] ?? [];
    methods.setAttribute('aria-label', lang === 'zh' ? '方法' : '用いた方法');
    get('methods-list').replaceChildren(...methodLabels.map(text => {
      const item = document.createElement('li');
      item.textContent = text;
      return item;
    }));
    methods.hidden = methodLabels.length === 0;
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
      for (const node of [annotation, heading, copy, ...(methodLabels.length ? [methods] : []), ...(items.length ? [media] : [])]) {
        node.getAnimations().forEach(animation => animation.cancel());
        node.animate([{ opacity: .45, transform: 'translateY(5px)' }, { opacity: 1, transform: 'none' }], { ...timing, duration: 210 });
      }
    }
  }

  function paint() {
    const set = (ids, visible) => ids.forEach(id => reveal(id, visible));
    const map = get('map');
    if (shown === 0) delete map.dataset.layout;
    else map.dataset.layout = shown >= 1.5 ? 'expanded' : 'practice';
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
      } else node.textContent = node.dataset.step ? `${node.dataset.step}. ${text}` : text;
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
    for (const id of ['reader-english', 'reader-title', 'reader-copy', 'reader-methods', 'reader-media']) {
      get(id).getAnimations().forEach(animation => animation.cancel());
    }
    shown = target;
    paint();
  });
  translate();
  paint();
})();
