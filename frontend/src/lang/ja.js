export default {
  sidebar: {
    home: 'トップページ',
    stylegen: 'スタイルジェネレータ',
    help: 'ヘルプ',
    projectAddress: 'プロジェクトアドレス',
    giftRecordOfficial: '公式スーパーチャット記録',
  },
  home: {
    roomIdEmpty: 'ルームのIDを空白にすることはできません',
    roomIdInteger: 'ルームは正の整数でなければなりません',

    general: '常規',
    roomId: 'ルームID',
    showDanmaku: 'コメントを表示する',
    showSuperchat: 'スーパーチャットを表示する',
    showNewMember: '新メンバーを表示する',
    showGift: 'ギフトを表示する',
    showGiftInfo: 'ギフト内容を表示する',
    mergeSimilarDanmaku: '同じコメントを合併する',
    mergeGift: 'ギフトを合併する',

    danmakuAtBottom: 'コメントを下揃え',
    tickerAtButtom: '最低表示常駐Topスーパーチャットを下から現れる',

    showTranslateDanmakuOnly: '翻訳コメントだけを表示する',
    translationSign: '翻訳コメントの合図キャラクタ',
    onlyOneCharacter: '一個キャラクタだけ、例：【',

    minGiftPrice: '最低表示スーパーチャット価格（CNY）',
    minTickerPrice: '最低表示常駐Topスーパーチャット価格（CNY）',
    maxNumber: '最大コメント数',
    fadeOutNum: '消えるコメント数',
    pinTime: 'コメントの存在時間(0 は消しない)',

    imageShowType: 'スタッフの表現方',
    imageShowTypes: [
      {
        id: '0',
        name: '文字を替わる(合図キャラクタ必要ない)'
      },
      {
          id: '1',
          name: '文字を替わる(合図キャラクタ必要)'
      },
      {
          id: '2',
          name: 'コメントの後で付ける'
      }
    ],
    maxImage: '最大画像数',

    block: 'ブロック',
    giftDanmaku: 'ブロックシステムコメント（プレゼント効果）',
    blockLevel: 'ブロックユーザーレベルがx未満',
    informalUser: 'ブロック非公式ユーザー',
    unverifiedUser: 'ブロック認証されていないユーザー',
    blockKeywords: 'ブロックキーワード',
    onePerLine: '1行に1つずつ',
    blockUsers: 'ブロックユーザー',
    blockMedalLevel: 'ブロック勲章等級がx未満',

    advanced: 'アドバンスド',
    relayMessagesByServer: 'サーバを介してメッセージを転送する',
    autoTranslate: 'コメントを日本語に翻訳する（サーバを介してメッセージを転送する必要）',
    giftUsernamePronunciation: 'スーパーチャットのユーザー名の発音',
    dontShow: '非表示',
    pinyin: 'ピンイン',
    kana: '仮名',

    emoticon: 'カスタムスタンプ',
    emoticonKeyword: '置き換えるキーワード',
    emoticonUrl: 'URL',
    operation: '操作',
    addEmoticon: 'スタンプを追加',
    emoticonFileTooLarge: 'ファイルサイズが大きすぎます。最大サイズは1MBです',

    testing: 'コメントテスト',
    minDanmakuInterval: '最小コメント間隔',
    maxDanmakuInterval: '最大コメント間隔',

    roomUrl: 'ルームのURL',
    enterBilibili: 'Bilibiliルームに入る',
    enterRoom: 'ルームに入る',
    enterTestRoom: 'テストルームに入る',
    exportConfig: 'コンフィグの導出',
    importConfig: 'コンフィグの導入',

    failedToParseConfig: 'コンフィグ解析に失敗しました'
  },
  stylegen: {
    legacy: '古典',
    lineLike: 'Line風',

    light: '明るい',
    dark: '暗い',

    global: '全局設定',
    danmakuAtBottom: 'コメントを下から現れる',
    tickerAtButtom: '最低表示常駐Topスーパーチャットを下から現れる',

    outlines: 'アウトライン',
    showOutlines: 'アウトラインを表示する',
    outlineSize: 'アウトラインのサイズ',
    outlineColor: 'アウトラインの色',

    avatars: 'アイコン',
    showAvatars: 'アイコンを表示する',
    avatarSize: 'アイコンのサイズ',

    userNames: 'ユーザー名',
    showUserNames: 'ユーザー名を表示する',
    font: 'フォント',
    fontSize: 'フォントサイズ',
    lineHeight: '行の高さ（0はデフォルト）',
    randomUserNamesColor: 'ランドンユーザー名の色',
    normalColor: 'ノーマルの色',
    ownerColor: 'オーナーの色',
    moderatorColor: '管理者の色',
    memberColor: 'メンバーの色',
    showBadges: '勲章を見せる',
    showColon: 'ユーザー名の後にコロンが表示されます',
    emoticonSize: 'スタンプサイズ',

    medal: 'ファン勲章',
    showMedal: 'ファン勲章を表示する',
    showOnlyOwnerMedal: 'オーナーのファン勲章だけを表示する',
    showMedalName: 'ファン勲章名を表示する',
    showMedalLevel: 'ファン勲章レベルを表示する',

    messages: 'コメント',
    color: '色',
    onNewLine: '新しい行に表示する',

    time: '時間',
    showTime: '時間を表示する',

    backgrounds: '背景',
    bgColor: '背景色',
    useBarsInsteadOfBg: '背景に代わります',
    messageBgColor: 'コメント背景色',
    ownerMessageBgColor: 'オーナーコメント背景色',
    moderatorMessageBgColor: '管理者コメント背景色',
    memberMessageBgColor: 'メンバーコメント背景色',

    scAndNewMember: 'スーパーチャット、新メンバー',
    firstLineFont: '1行目のフォント',
    firstLineFontSize: '1行目のフォントサイズ',
    firstLineLineHeight: '1行目の高さ（0はデフォルト）',
    firstLineColor: '1行目の色',
    secondLineFont: '2行目のフォント',
    secondLineFontSize: '2行目のフォントサイズ',
    secondLineLineHeight: '2行目の高さ（0はデフォルト）',
    secondLineColor: '2行目の色',
    scContentLineFont: 'スーパーチャットのコンテンツフォント',
    scContentLineFontSize: 'スーパーチャットコンテンツフォントサイズ',
    scContentLineLineHeight: 'スーパーチャットコンテンツライン高さ（0がデフォルト）',
    scContentLineColor: 'スーパーチャットコンテンツライン色',
    showNewMemberBg: '新メンバーの背景を表示する',
    showScTicker: 'スーパーチャットチカーの表示',
    showOtherThings: 'スーパーチャットチカー以外のコンテンツを表示します',

    animation: 'アニメーション',
    animateIn: '入場アニメーション',
    fadeInTime: 'フェードイン時間（ミリ秒）',
    animateOut: '古いコメントを除去する',
    animateOutWaitTime: '待ち時間（秒）',
    fadeOutTime: 'フェードアウト時間（ミリ秒）',
    slide: '滑る',
    reverseSlide: '逆の滑る',
    playAnimation: 'アニメーションを再生する',

    result: '結果',
    copy: 'コピー',
    resetConfig: 'デフォルトに戻す'
  },
  help: {
    help: 'ヘルプ',
    p1: '1. ビリビリの生放送ウェブから生放送ルームIDをこぴーする',
    p2: '2. ホームページでコピーしたIDを入力し、ルームのURLをこぴーする',
    p3: '3. スタイルジェネレータでお好みのコメント様子を選び、出力したCSSをコピーする',
    p4: '4. OBSでブラウザを新規作成する',
    p5: '5. プロパティでこぴーしたURLを入力し、カスタムCSSでスタイルジェネレータのCSSを入力する'
  },
  chat: {
    moderator: 'モデレーター',
    guardLevel1: '総督',
    guardLevel2: '提督',
    guardLevel3: '艦長',
    sendGift: '{giftName}x{num} を贈りました',
    membershipTitle: '新規メンバー',
    tickerMembership: 'メンバー'
  }
}
