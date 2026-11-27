(() => {
  'use strict';

  const UI = {
    'ja-en': {
      docTitle: '修士論文の構成と研究方法',
      tabOutline: '論文構成',
      tabMethod: '研究方法',
      toggleToc: '全目次',
      closeToc: '閉じる',
      sideLabel: '修士論文・全八章',
      couplingLabel: '事例再利用',
      openMethod: '研究方法図で見る →',
      tocHeading: '修士論文 目次一覧',
      thesisTitle: '公共空間における解説サインデザインのための共創ツールに関する研究 —福岡市植物園温室エリアを事例として—',
      frontMatterTitle: '前付',
      frontMatter: ['論文要旨（和文・英文）', '目次', '図目次・表目次'],
      backMatterTitle: '後付',
      backMatter: [
        '参考文献',
        '付録 A：Global Goals Jam 共創ワークショップ調査票・インタビューガイド',
        '付録 B：A/R/S コーディングマニュアルおよび Signage Annotator 画面仕様',
        '付録 C：現地実験の比較サイン刺激物および AOI 設定図',
        '付録 D：実験同意書・較正手順書および全有効被験者のヒートマップ・三層地形図集',
        '付録 E：修士課程における研究業績および公開ツール一覧',
        '謝辞',
      ],
      parts: { p1: '1. 基盤', p2: '2. ツール I', p3: '3. ツール II', p4: '4. 統合' },
      shortTitles: {
        ch1: '序論',
        ch2: '先行研究と理論',
        ch3: '研究方法論',
        ch4: 'ツール I の構築と検証',
        ch5: 'ツール II の構築',
        ch6: 'ツール II の現地検証',
        ch7: '総合考察',
        ch8: '結論と展望',
      },
    },
    zh: {
      docTitle: '修士论文结构与研究方法',
      tabOutline: '论文结构',
      tabMethod: '研究方法',
      toggleToc: '全目录',
      closeToc: '关闭',
      sideLabel: '修士论文・全八章',
      couplingLabel: '案例复用',
      openMethod: '在研究方法图中查看 →',
      tocHeading: '修士论文 目录总览',
      thesisTitle: '面向公共空间解说标识设计的共创工具研究——以福冈市植物园温室区域为例',
      frontMatterTitle: '前置部分',
      frontMatter: ['论文摘要（日文・英文）', '目录', '图目录・表目录'],
      backMatterTitle: '后置部分',
      backMatter: [
        '参考文献',
        '附录 A：Global Goals Jam 共创工作坊问卷与访谈提纲',
        '附录 B：A/R/S 编码手册与 Signage Annotator 界面规格',
        '附录 C：实地实验对照刺激材料与 AOI 区域划分图',
        '附录 D：实验知情同意书、校准协议与全样本热力图 / 三层地形图集',
        '附录 E：硕士期间学术发表与开源工具列表',
        '致谢',
      ],
      parts: { p1: '1. 基础', p2: '2. 工具 I', p3: '3. 工具 II', p4: '4. 综合' },
      shortTitles: {
        ch1: '绪论',
        ch2: '文献与理论',
        ch3: '研究方法论',
        ch4: '工具 I 构建与验证',
        ch5: '工具 II 构建',
        ch6: '工具 II 实地验证',
        ch7: '综合讨论',
        ch8: '结论与展望',
      },
    },
  };

  const CHAPTERS = [
    {
      id: 1, part: 1, methodTarget: null,
      en: 'CHAPTER 01 · INTRODUCTION',
      jaTitle: '第1章　序論',
      zhTitle: '第1章　绪论',
      jaRole: '公共植物園における解説サインの現状課題と、共創プロセスの構造的ボトルネックから研究目的と RQ を定義する。',
      zhRole: '界定公共植物园解说标识的现实困境与共创流程瓶颈，提出研究目的、研究问题与论文整体结构。',
      sections: [
        { num: '1.1', ja: '研究背景：公共植物園における非公式学習と解説サインの現状と課題', zh: '研究背景：公共植物园非正式学习与解说标识的现实困境' },
        { num: '1.2', ja: '解説サインの共創デザインにおけるプロセス上の構造的課題', zh: '共创设计介入公共解说标识实践的流程瓶颈' },
        { num: '1.3', ja: '研究目的およびリサーチ・クエスチョン（RQ）', zh: '研究目的与研究问题（RQ）' },
        { num: '1.4', ja: '研究対象と実証フィールド：福岡市植物園温室エリア', zh: '研究对象与实证场域：福冈市植物园温室区域' },
        { num: '1.5', ja: '本研究の学術的意義と位置づけ', zh: '研究意义与学术定位' },
        { num: '1.6', ja: '本論文の構成', zh: '论文结构与章节安排' },
      ],
    },
    {
      id: 2, part: 1, methodTarget: null,
      en: 'CHAPTER 02 · LITERATURE REVIEW',
      jaTitle: '第2章　先行研究と理論的枠組み',
      zhTitle: '第2章　文献综述与理论基础',
      jaRole: '解説理論・共創デザイン・サイン分析・実地視線計測・情報理論の五領域を統合し、本研究の理論基盤を確立する。',
      zhRole: '梳理五个核心学术脉络：解说标识理论、公共共创、结构编码、实地眼动与信息熵阅读解析。',
      sections: [
        { num: '2.1', ja: '非公式学習環境と解説サインに関する理論（Tilden・EROT・認知負荷）', zh: '非正式学习空间与解说标识理论（Tilden 原则、EROT、认知负荷）' },
        { num: '2.2', ja: '公共空間における参加型・共創デザイン研究の動向', zh: '公共空间中的参与式与共创设计研究现状' },
        { num: '2.3', ja: '解説サインの現状診断手法と構造化コーディング分析', zh: '解说标识的现状诊断方法与结构化内容编码研究' },
        { num: '2.4', ja: '公共実地環境における視線計測技術と視覚的注意の評価手法', zh: '公共实地的眼动追踪技术与视觉注意评估方法' },
        { num: '2.5', ja: '情報理論の視点による読解認知解析（情報エントロピー・空間結合）', zh: '信息论视角下的阅读认知分析（信息熵、惊奇度与空间耦合）' },
        { num: '2.6', ja: '本章のまとめ：先行研究の課題と本研究の着眼点', zh: '本章小结：既有研究空白与本研究切入点' },
      ],
    },
    {
      id: 3, part: 1, methodTarget: 'gaps',
      en: 'CHAPTER 03 · RESEARCH METHODOLOGY',
      jaTitle: '第3章　研究方法論と全体構成',
      zhTitle: '第3章　研究方法论与整体架构',
      jaRole: 'DSR / ADR に基づく4段階の共通研究プロセスを提示し、二つのツールの内部密結合と「論理独立・実践緩結合」を定義する。',
      zhRole: '确立 DSR / ADR 四阶段母方法，识别共创前后两处结构缺陷，并阐明两套工具的独立性与松耦合关系。',
      sections: [
        { num: '3.1', ja: '研究パラダイムの位置づけ：デザイン科学研究（DSR）と ADR', zh: '研究范式定位：设计科学研究（DSR）与行动设计研究（ADR）' },
        { num: '3.2', ja: '解説サイン共創に向けた4段階の共通研究プロセス', zh: '面向解说标识共创的四阶段基础研究路径' },
        {
          num: '3.3', ja: '共創現場への実践的介入と二段階のプロセス欠陥の特定', zh: '共创实践介入与双阶段流程缺陷识别',
          children: [
            { num: '3.3.1', ja: 'Global Goals Jam における現場観察および多主体調査', zh: 'Global Goals Jam 实地共创参与观察与多方调研' },
            { num: '3.3.2', ja: '参加型・システム型問題抽出フレームワーク（既発表『研究Ⅰ』の展開）', zh: '参与型与系统型问题抽取框架（承接《研究Ⅰ》成果）' },
            { num: '3.3.3', ja: '共創前期「現状構造診断の欠如」と後期「実地評価手法の欠如」の定義', zh: '共创前期“结构诊断缺口”与后期“实地评估缺口”的界定' },
          ],
        },
        {
          num: '3.4', ja: '二つの共創支援ツールの同型構造と関係性の整理', zh: '双工具体系的同构架构与双层关系',
          children: [
            { num: '3.4.1', ja: 'ツール I・ツール II それぞれにおける内部手法の密結合', zh: '工具 I 与工具 II 各自的方法论内部紧耦合机制' },
            { num: '3.4.2', ja: '検証ロジック上の独立性と研究実践における緩やかな結合', zh: '验证逻辑的本质独立性与案例实施的流程松耦合性' },
          ],
        },
        { num: '3.5', ja: '研究倫理、プライバシー保護およびデータガバナンス', zh: '研究伦理、隐私保护与数据治理规范' },
      ],
    },
    {
      id: 4, part: 2, methodTarget: 'prototype-i',
      en: 'CHAPTER 04 · TOOL I · SIGNAGE ANNOTATOR',
      jaTitle: '第4章　共創前期診断ツール I の構築と検証',
      zhTitle: '第4章　共创前期诊断工具 I 的构建与验证',
      jaRole: 'A/R/S コーディングルールと Signage Annotator を開発し、温室既設サイン70点の試用および専門家評価から有用性を検証する。',
      zhRole: '构建 A/R/S 编码规则与 Signage Annotator 工具，通过温室 70 块标识基线诊断与专家反馈验证工具可用性。',
      sections: [
        { num: '4.1', ja: '共創前期における課題とツールの要件定義', zh: '共创前期诊断的需求定义与设计目标' },
        {
          num: '4.2', ja: '解説理論に基づく A/R/S 構造化コーディングルールの構築', zh: '基于解说理论的 A/R/S 结构化编码规则体系构建',
          children: [
            { num: '4.2.1', ja: '三つの設計原則（A：啓発的雰囲気／R：生活経験関連性／S：明確な構造）', zh: '三大核心维度界定（A 启发性氛围 / R 受众关联性 / S 结构清晰性）' },
            { num: '4.2.2', ja: '抽象的な解説原則から観察可能な画像コーディング指標への操作化', zh: '从抽象解说原则到可观测图像编码指标的操作化转换' },
          ],
        },
        {
          num: '4.3', ja: 'Signage Annotator のシステム設計と実装', zh: 'Signage Annotator 系统设计与功能实现',
          children: [
            { num: '4.3.1', ja: '複数分析者による画像ベースの質的テーマ分析・コーディング機能', zh: '面向多人协同的图像定性主题分析与编码架构' },
            { num: '4.3.2', ja: 'サインシステム全体の傾向を可視化する定量診断レポート生成機構', zh: '面向标识系统整体的量化诊断报表生成机制' },
          ],
        },
        {
          num: '4.4', ja: 'ツール I の実地試用：福岡市植物園温室エリアの基線診断（N = 70）', zh: '工具 I 的实地试用：福冈市植物园温室既有标识基线诊断（N = 70）',
          children: [
            { num: '4.4.1', ja: 'サイン画像収集、協働コーディング手順および合意形成プロセス', zh: '样本采集、多人协同编码与信度核对流程' },
            { num: '4.4.2', ja: '既設サイン群の構造的傾向と体験設計上の欠落の可視化', zh: '温室既有标识体系的现状结构分布与体验缺口发现' },
          ],
        },
        {
          num: '4.5', ja: 'ツール I の有用性検証と専門家フィードバックの分析', zh: '工具 I 的可用性评估与专家反馈分析',
          children: [
            { num: '4.5.1', ja: 'サイン専門家インタビューの設計と評価観点（操作性・明瞭性・診断支援力）', zh: '标识专家访谈设计与评估维度（易用性、规则清晰度、问题诊断力）' },
            { num: '4.5.2', ja: '専門家評価の整理とツール改善への示唆', zh: '专家反馈归纳与原型改进方向' },
          ],
        },
        { num: '4.6', ja: '本章のまとめ', zh: '本章小结' },
      ],
    },
    {
      id: 5, part: 3, methodTarget: 'prototype-ii',
      en: 'CHAPTER 05 · TOOL II ARCHITECTURE',
      jaTitle: '第5章　共創後期現地評価ツール II の構築',
      zhTitle: '第5章　共创后期实地评估工具 II 的构建',
      jaRole: '非接触型視線計測システム（SIGN Visual Attention）の実装と、マクロ情報エントロピーおよび三層視線地形結合モデルを定式化する。',
      zhRole: '完成非接触式眼动采集系统（SIGN Visual Attention）迭代开发，并建立宏观信息熵与三层空间地形耦合分析模型。',
      sections: [
        { num: '5.1', ja: '公共実地評価における制約条件とツールの要件定義', zh: '公共实地评估的现实约束与工具需求定义' },
        {
          num: '5.2', ja: '非接触型視線計測システム（SIGN Visual Attention）の設計と反復開発', zh: '非接触式实地眼动采集系统（SIGN Visual Attention）的设计与迭代',
          children: [
            { num: '5.2.1', ja: '汎用ハードウェア構成とブラウザ完結型プライバシー保護アーキテクチャ', zh: '通用硬件选型与浏览器端本地闭环隐私架构' },
            { num: '5.2.2', ja: '実物印刷サインへの9点空間キャリブレーションおよび透視投影変換', zh: '面向物理印刷标识的 9 点空间校准与二维透视几何映射' },
            { num: '5.2.3', ja: '自然な観覧行動を阻害しない4段階計測ワークフロー', zh: '面向自然游览的四阶段自动化测量工作流' },
            { num: '5.2.4', ja: '実験室予備実験とシステム改良（Visual Analytics から v3 へ）', zh: '实验室预备实验与系统演进（从 Visual Analytics 到 v3）' },
          ],
        },
        {
          num: '5.3', ja: '「滞在時間」から「情報処理」へ拡張する多階層視線解析モデル', zh: '从“停留时长”到“信息加工”的多层级眼动分析模型',
          children: [
            { num: '5.3.1', ja: '従来型ヒートマップ・意味的 AOI 分割および文字領域カバレッジ指標', zh: '常规热力图、AOI 语义划分与文字覆盖率指标（及时间指标局限）' },
            { num: '5.3.2', ja: 'マクロ視線エントロピー指標群（SGE_norm・GTE_norm・E_gain・η）', zh: '宏观眼动信息熵指标体系（SGE_norm、GTE_norm、E_gain、η）' },
            { num: '5.3.3', ja: 'ミクロ三層空間地形結合モデル（情報代理 I・滞留密度 D・空間結合 C）', zh: '微观三层空间地形耦合模型（信息代理 I、注视密度 D、空间耦合 C）' },
          ],
        },
        { num: '5.4', ja: '本章のまとめ', zh: '本章小结' },
      ],
    },
    {
      id: 6, part: 3, methodTarget: 'validation-ii',
      en: 'CHAPTER 06 · TOOL II FIELD VALIDATION',
      jaTitle: '第6章　ツール II の現地実装と総合検証実験',
      zhTitle: '第6章　工具 II 的实地部署与综合验证实验',
      jaRole: '植物園温室での比較実験を通じ、AOI 解析・情報エントロピー地形解析・工学的運用性・参加者体験の多角面からツール II を検証する。',
      zhRole: '通过植物园温室实地对照实验，从常规 AOI、信息熵与三层地形、现场工程稳定性及参与者体验四个层面综合验证工具 II。',
      sections: [
        {
          num: '6.1', ja: '現地比較検証実験の設計', zh: '实地对照验证实验设计',
          children: [
            { num: '6.1.1', ja: '検証目的と評価枠組み（識別妥当性・情報解像度・現地運用性）', zh: '验证目标与评价框架（区分效度、信息分辨率、实地可用性）' },
            { num: '6.1.2', ja: '比較用テスト媒体の設計（従来サインと共創改良サインの事例再利用）', zh: '对照测试载体的构建（传统版与共创改良版实体标识的案例复用）' },
            { num: '6.1.3', ja: '実験環境、一般来園者の募集（20〜80歳）および現地実施手順', zh: '实验场域、真实来园者招募（20–80 岁）与现场执行流程' },
            { num: '6.1.4', ja: 'データ品質管理、スクリーニング基準および解析対象データセット定義', zh: '数据质检规则、样本筛选与有效分析数据集口径说明' },
          ],
        },
        {
          num: '6.2', ja: '従来型 AOI・文字領域カバレッジ解析による検証結果', zh: '常规 AOI 与文字覆盖率验证结果',
          children: [
            { num: '6.2.1', ja: '初期10秒窓における文字領域カバレッジの条件間比較', zh: '初期 10 秒窗口文字覆盖率组间差异' },
            { num: '6.2.2', ja: 'A/R/S 意味領域別の注意配分および視線再構成の傾向', zh: 'A/R/S 语义模块注意力重分布特征' },
            { num: '6.2.3', ja: '総注視時間と本文注視割合の乖離に関する実証的検討', zh: '总停留时长与正文注视占比的解释困境实证' },
          ],
        },
        {
          num: '6.3', ja: '情報エントロピーおよび三層視線地形結合解析による検証結果', zh: '信息熵与三层眼动地形耦合验证结果',
          children: [
            { num: '6.3.1', ja: '対応ありマクロ視線エントロピー指標の統計比較と効果量', zh: '配对宏观眼动熵指标统计检验与效应量分析' },
            { num: '6.3.2', ja: '三層視線地形の空間対照および代表的個人事例の解読', zh: '三层眼动地形空间对照与典型个体案例解析（前 10 秒 / 完整试次）' },
            { num: '6.3.3', ja: '「受動的な滞留」と「情報駆動型の閲読」に対する空間識別力の検証', zh: '“低效滞留”与“信息驱动吸收”的空间辨析效度评估' },
          ],
        },
        {
          num: '6.4', ja: '現地における工学的運用性および参加者体験の評価', zh: '实地工程可用性与参与者主观体验评估',
          children: [
            { num: '6.4.1', ja: '設営効率、温湿度環境への適応性および連続稼働安定性', zh: '现场架设效率、温室环境适应性与系统运行稳定性' },
            { num: '6.4.2', ja: '参加者インタビューに基づく主観評価（非侵襲性と理解容易性）', zh: '参与者访谈反馈（无干扰阅读体验与流程可理解性）' },
            { num: '6.4.3', ja: '自然光環境下における技術的許容範囲と誤差境界', zh: '自然场域下的技术容差与误差边界（侧光过曝与头部位移）' },
          ],
        },
        { num: '6.5', ja: '本章のまとめ', zh: '本章小结' },
      ],
    },
    {
      id: 7, part: 4, methodTarget: null,
      en: 'CHAPTER 07 · GENERAL DISCUSSION',
      jaTitle: '第7章　総合考察',
      zhTitle: '第7章　综合讨论',
      jaRole: '独立検証された二つのツールを共創プロセス全体へ統合し、他施設への展開可能性・理論的示唆・妥当性の境界を論じる。',
      zhRole: '将两套独立验证的工具放回完整共创闭环，探讨跨场域迁移、设计方法论启示以及本研究的效度边界。',
      sections: [
        { num: '7.1', ja: 'エビデンスに基づく共創支援フレームワーク（入口診断・開放設計・出口評価・反復還流）', zh: '模块化循证共创框架（入口诊断—开放设计—出口评估—迭代回流）' },
        { num: '7.2', ja: 'ツールの独立運用性と他領域への展開可能性（博物館・科学館等）', zh: '工具的逻辑独立性与跨场域迁移潜力（博物馆、科学馆等）' },
        { num: '7.3', ja: '［選択］評価ツールから適応型メディアへの応用展開：Dynamic Signage', zh: '［可选］从评估工具到自适应媒介的应用延伸：Dynamic Signage', optional: true },
        { num: '7.4', ja: '解説サイン設計論および共創デザイン方法論に対する示唆', zh: '对解说标识设计实践与共创设计方法论的启示' },
        { num: '7.5', ja: '本研究の限界と妥当性の境界（標本数・提示順・事前重み・併存妥当性）', zh: '本研究的局限性与效度边界（样本规模、呈现顺序、预设权重与外部效标）' },
      ],
    },
    {
      id: 8, part: 4, methodTarget: null,
      en: 'CHAPTER 08 · CONCLUSION & FUTURE WORK',
      jaTitle: '第8章　結論と今後の展望',
      zhTitle: '第8章　结论与未来展望',
      jaRole: '全リサーチ・クエスチョンへの回答と学術的・実践的貢献を総括し、博士課程での長期記憶・空間連続性研究へ接続する。',
      zhRole: '总结全文核心结论与三大贡献，并清晰衔接博士阶段的实测惊奇度校准、延迟记忆保持与空间动线仿真研究。',
      sections: [
        { num: '8.1', ja: '本研究の結論（各リサーチ・クエスチョンへの回答）', zh: '全文核心结论（逐一回应研究问题）' },
        { num: '8.2', ja: '本研究の学術的・実践的貢献（方法論・ツールプロトタイプ・設計実践）', zh: '主要研究贡献（方法论、工具原型、社会与设计实践）' },
        { num: '8.3', ja: '今後の展望（サージ較正・遅延記憶保持・園内動線の空間連続性・AI 視線シミュレーション）', zh: '未来研究展望（语言模型惊奇度校准、延迟记忆、空间动线连续性与 AI 回游仿真）' },
      ],
    },
  ];

  const params = new URLSearchParams(location.search);
  let lang = params.get('lang') === 'zh' ? 'zh' : 'ja-en';
  let activeView = params.get('view') === 'method' ? 'method' : 'outline';
  let currentCh = 1;
  let focusPart = null;
  const expanded = new Set(['3.3', '4.2', '5.3', '6.3']);

  const outlineView = document.getElementById('outline-view');
  const methodView = document.getElementById('method-view');
  const tabOutline = document.getElementById('tab-outline');
  const tabMethod = document.getElementById('tab-method');
  const toggleTocBtn = document.getElementById('toggle-toc');
  const tocSheet = document.getElementById('toc-sheet');
  const closeTocBtn = document.getElementById('close-toc');

  const mapEl = document.getElementById('outline-map');
  const svgEl = document.getElementById('outline-svg');
  const spineEl = document.getElementById('outline-spine');
  const couplingLabel = document.getElementById('outline-coupling-label');
  const readerEl = document.getElementById('outline-reader');
  const openMethodLink = document.getElementById('open-method-link');
  const chButtons = [...document.querySelectorAll('#outline-map [data-ch]')];
  const partButtons = [...document.querySelectorAll('#outline-spine [data-part-btn]')];

  function updateUrl() {
    const url = new URL(location.href);
    url.searchParams.set('lang', lang);
    if (activeView === 'method') url.searchParams.set('view', 'method');
    else url.searchParams.delete('view');
    url.hash = '';
    history.replaceState(null, '', url);
  }

  function svgNode(tag, attrs) {
    const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, String(v));
    return el;
  }

  function getAnchor(chId) {
    const btn = document.querySelector(`#outline-map [data-ch="${chId}"]`);
    const container = btn.closest('li, .outline-tool-node');
    const mr = mapEl.getBoundingClientRect();
    const cr = container.getBoundingClientRect();
    return {
      x: cr.left - mr.left + cr.width / 2,
      y: cr.bottom - mr.top,
    };
  }

  function drawLines() {
    if (outlineView.hidden) return;
    const mr = mapEl.getBoundingClientRect();
    if (mr.width < 10 || mr.height < 10) return;
    svgEl.setAttribute('viewBox', `0 0 ${Math.round(mr.width)} ${Math.round(mr.height)}`);

    const p3 = getAnchor(3);
    const p4 = getAnchor(4);
    const p5 = getAnchor(5);
    const p6 = getAnchor(6);
    const p7 = getAnchor(7);

    const splitX = p3.x + (p5.x - p3.x) * 0.42;
    const mergeX = p6.x + (p7.x - p6.x) * 0.56;

    const gradI = document.getElementById('outline-forest-rail');
    const gradII = document.getElementById('outline-lemon-rail');
    gradI.setAttribute('x1', String(splitX));
    gradI.setAttribute('x2', String(mergeX));
    gradII.setAttribute('x1', String(splitX));
    gradII.setAttribute('x2', String(mergeX));

    document.getElementById('outline-connectors').replaceChildren(
      svgNode('path', {
        class: 'connector',
        d: `M ${p3.x} ${p3.y} V ${p3.y + 18} H ${splitX} V ${p5.y}`,
      }),
      svgNode('path', {
        class: 'connector',
        d: `M ${mergeX} ${p5.y} V ${p7.y + 18} H ${p7.x} V ${p7.y}`,
      })
    );

    document.getElementById('outline-branch-i').replaceChildren(
      svgNode('path', { class: 'branch branch-i', d: `M ${splitX} ${p4.y} H ${mergeX}` })
    );
    document.getElementById('outline-branch-ii').replaceChildren(
      svgNode('path', { class: 'branch branch-ii', d: `M ${splitX} ${p5.y} H ${mergeX}` })
    );

    const btn6 = document.querySelector('#outline-map [data-ch="6"]');
    const btn6Top = btn6.getBoundingClientRect().top - mr.top;
    const corridorGap = btn6Top - p4.y;
    const midY = corridorGap > 24 ? p4.y + corridorGap * 0.48 : p4.y + 14;
    const arrowY = Math.max(midY + 6, btn6Top - 4);
    document.getElementById('outline-coupling').replaceChildren(
      svgNode('path', {
        class: 'coupling',
        d: `M ${p4.x} ${p4.y + 5} V ${midY} H ${p6.x} V ${arrowY}`,
      }),
      svgNode('path', {
        class: 'connector',
        d: `M ${p6.x - 4} ${arrowY - 5} L ${p6.x} ${arrowY} L ${p6.x + 4} ${arrowY - 5}`,
      })
    );

    couplingLabel.style.left = `${(p4.x + p6.x) / 2}px`;
    couplingLabel.style.top = `${midY}px`;
  }

  function renderReader(animate = true) {
    const isZh = lang === 'zh';
    const ch = CHAPTERS.find(c => c.id === currentCh);
    document.getElementById('outline-reader-english').textContent = ch.en;
    document.getElementById('outline-reader-title').textContent = isZh ? ch.zhTitle : ch.jaTitle;
    document.getElementById('outline-reader-role').textContent = isZh ? ch.zhRole : ch.jaRole;
    document.getElementById('outline-counter').textContent = `${String(ch.id).padStart(2, '0')} / 08`;
    document.getElementById('outline-prev').disabled = ch.id === 1;
    document.getElementById('outline-next').disabled = ch.id === CHAPTERS.length;

    openMethodLink.hidden = !ch.methodTarget;
    openMethodLink.textContent = UI[lang].openMethod;

    const listEl = document.getElementById('outline-sections');
    listEl.replaceChildren(...ch.sections.map(sec => {
      const li = document.createElement('li');
      li.className = 'sec-item' + (sec.optional ? ' is-optional' : '');
      const hasKids = Array.isArray(sec.children) && sec.children.length > 0;
      const isOpen = hasKids && expanded.has(sec.num);

      const row = document.createElement(hasKids ? 'button' : 'div');
      row.className = 'sec-row' + (hasKids ? '' : ' is-static');
      if (hasKids) {
        row.type = 'button';
        row.setAttribute('aria-expanded', String(isOpen));
        row.addEventListener('click', () => {
          if (expanded.has(sec.num)) expanded.delete(sec.num);
          else expanded.add(sec.num);
          renderReader(false);
        });
      }

      const numSpan = document.createElement('span');
      numSpan.className = 'sec-num';
      numSpan.textContent = sec.num;

      const titleSpan = document.createElement('span');
      titleSpan.className = 'sec-title';
      titleSpan.textContent = isZh ? sec.zh : sec.ja;

      const toggleSpan = document.createElement('span');
      toggleSpan.className = 'sec-toggle';
      toggleSpan.setAttribute('aria-hidden', 'true');
      toggleSpan.textContent = hasKids ? (isOpen ? '−' : '+') : '';

      row.append(numSpan, titleSpan, toggleSpan);
      li.append(row);

      if (hasKids && isOpen) {
        const ul = document.createElement('ul');
        ul.className = 'sub-list';
        for (const kid of sec.children) {
          const kli = document.createElement('li');
          const kn = document.createElement('span');
          kn.className = 'sub-num';
          kn.textContent = kid.num;
          const kt = document.createElement('span');
          kt.textContent = isZh ? kid.zh : kid.ja;
          kli.append(kn, kt);
          ul.append(kli);
        }
        li.append(ul);
      }

      return li;
    }));

    readerEl.scrollTop = 0;
    if (animate && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      readerEl.animate(
        [{ opacity: .55, transform: 'translateY(4px)' }, { opacity: 1, transform: 'none' }],
        { duration: 210, easing: 'cubic-bezier(.2, .75, .25, 1)' }
      );
    }
  }

  function renderTocSheet() {
    const isZh = lang === 'zh';
    const dict = UI[lang];
    document.getElementById('toc-heading').textContent = dict.tocHeading;
    document.getElementById('toc-thesis-title').textContent = dict.thesisTitle;
    closeTocBtn.textContent = dict.closeToc;

    const grid = document.getElementById('toc-grid');
    grid.replaceChildren();

    for (const ch of CHAPTERS) {
      const block = document.createElement('section');
      block.className = 'toc-chapter';

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'toc-ch-btn';
      btn.innerHTML = `<span class="toc-ch-num">${String(ch.id).padStart(2, '0')}</span><span class="toc-ch-title">${isZh ? ch.zhTitle : ch.jaTitle}</span>`;
      btn.addEventListener('click', () => {
        setTocOpen(false);
        setView('outline');
        selectChapter(ch.id);
      });

      const ol = document.createElement('ol');
      ol.className = 'toc-sec-list';
      for (const sec of ch.sections) {
        const li = document.createElement('li');
        li.innerHTML = `<span class="sec-num">${sec.num}</span><span>${isZh ? sec.zh : sec.ja}</span>`;
        ol.append(li);
        if (sec.children) {
          for (const kid of sec.children) {
            const sub = document.createElement('li');
            sub.className = 'is-sub';
            sub.innerHTML = `<span class="sec-num">${kid.num}</span><span>${isZh ? kid.zh : kid.ja}</span>`;
            ol.append(sub);
          }
        }
      }
      block.append(btn, ol);
      grid.append(block);
    }

    const matter = document.createElement('div');
    matter.className = 'toc-matter';
    const front = document.createElement('div');
    front.innerHTML = `<h3>${dict.frontMatterTitle}</h3><ul>${dict.frontMatter.map(t => `<li>${t}</li>`).join('')}</ul>`;
    const back = document.createElement('div');
    back.innerHTML = `<h3>${dict.backMatterTitle}</h3><ul>${dict.backMatter.map(t => `<li>${t}</li>`).join('')}</ul>`;
    matter.append(front, back);
    grid.append(matter);
  }

  function syncStates() {
    const ch = CHAPTERS.find(c => c.id === currentCh);
    chButtons.forEach(btn => btn.setAttribute('aria-pressed', String(Number(btn.dataset.ch) === currentCh)));

    const activePart = focusPart ?? ch.part;
    spineEl.style.setProperty('--active-step', String(activePart - 1));
    partButtons.forEach(btn => btn.setAttribute('aria-pressed', String(Number(btn.dataset.partBtn) === activePart)));

    if (focusPart) mapEl.dataset.focusPart = String(focusPart);
    else delete mapEl.dataset.focusPart;
  }

  function selectChapter(id) {
    currentCh = Math.max(1, Math.min(CHAPTERS.length, Number(id)));
    focusPart = null;
    syncStates();
    renderReader(true);
  }

  function selectPart(partId) {
    const p = Number(partId);
    if (focusPart === p) {
      focusPart = null;
      syncStates();
      return;
    }
    focusPart = p;
    const first = CHAPTERS.find(c => c.part === p);
    if (first && CHAPTERS.find(c => c.id === currentCh).part !== p) {
      currentCh = first.id;
      renderReader(true);
    }
    syncStates();
  }

  function setView(view, methodTarget = null) {
    activeView = view === 'method' ? 'method' : 'outline';
    const isOutline = activeView === 'outline';
    outlineView.hidden = !isOutline;
    methodView.hidden = isOutline;
    toggleTocBtn.hidden = !isOutline;

    if (isOutline) {
      tabOutline.setAttribute('aria-current', 'page');
      tabMethod.removeAttribute('aria-current');
      requestAnimationFrame(drawLines);
    } else {
      tabMethod.setAttribute('aria-current', 'page');
      tabOutline.removeAttribute('aria-current');
      if (methodTarget && window.__methodAxis) {
        window.__methodAxis.focusFromOutline(methodTarget);
      }
    }
    updateUrl();
  }

  function setTocOpen(open) {
    tocSheet.hidden = !open;
    toggleTocBtn.setAttribute('aria-expanded', String(open));
    if (open) {
      renderTocSheet();
      closeTocBtn.focus();
    }
  }

  function applyLanguage() {
    const dict = UI[lang];
    document.documentElement.lang = lang === 'zh' ? 'zh' : 'ja';
    document.title = dict.docTitle;
    tabOutline.querySelector('.tab-label').textContent = dict.tabOutline;
    tabMethod.querySelector('.tab-label').textContent = dict.tabMethod;
    toggleTocBtn.textContent = dict.toggleToc;
    document.getElementById('outline-side-label').textContent = dict.sideLabel;
    couplingLabel.textContent = dict.couplingLabel;

    document.querySelectorAll('[data-ok]').forEach(el => {
      const key = el.dataset.ok;
      if (dict.parts[key]) el.textContent = dict.parts[key];
      else if (dict.shortTitles[key]) el.textContent = dict.shortTitles[key];
    });

    if (window.__methodAxis) window.__methodAxis.setLanguage(lang);
    renderReader(false);
    if (!tocSheet.hidden) renderTocSheet();
    requestAnimationFrame(drawLines);
    updateUrl();
  }

  tabOutline.addEventListener('click', () => setView('outline'));
  tabMethod.addEventListener('click', () => setView('method'));
  toggleTocBtn.addEventListener('click', () => setTocOpen(tocSheet.hidden));
  closeTocBtn.addEventListener('click', () => setTocOpen(false));

  chButtons.forEach(btn => btn.addEventListener('click', () => selectChapter(btn.dataset.ch)));
  partButtons.forEach(btn => btn.addEventListener('click', () => selectPart(btn.dataset.partBtn)));
  document.getElementById('outline-prev').addEventListener('click', () => selectChapter(currentCh - 1));
  document.getElementById('outline-next').addEventListener('click', () => selectChapter(currentCh + 1));
  openMethodLink.addEventListener('click', () => {
    const ch = CHAPTERS.find(c => c.id === currentCh);
    setView('method', ch.methodTarget);
  });

  window.addEventListener('keydown', event => {
    if (event.metaKey || event.ctrlKey || event.altKey) return;
    if (event.key === 'Escape' && !event.repeat && !event.defaultPrevented) {
      event.preventDefault();
      if (!tocSheet.hidden) {
        setTocOpen(false);
        return;
      }
      lang = lang === 'zh' ? 'ja-en' : 'zh';
      applyLanguage();
      return;
    }
    if (!tocSheet.hidden || activeView !== 'outline') return;
    if (event.key === 'ArrowRight') selectChapter(currentCh + 1);
    else if (event.key === 'ArrowLeft') selectChapter(currentCh - 1);
    else if (event.key >= '1' && event.key <= '8') selectChapter(Number(event.key));
    else if (event.key === '0') {
      focusPart = null;
      syncStates();
    }
  });

  const ro = new ResizeObserver(() => drawLines());
  ro.observe(mapEl);

  applyLanguage();
  syncStates();
  setView(activeView);
})();
