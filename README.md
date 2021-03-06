Adobe-Muse-Custom-Form
======================

概要
----
JavaScriptでradio button, checkbox, select をmuseのformで使えるようにします。  
自動生成されるPHPソースもそのまま使えます。

使い方
-----

### 準備
  
1.まずはフォームを作ります。ここではシンプルなコンタクト（Simple Contact）を使いました。

![Simple Contact](https://cloud.githubusercontent.com/assets/7941092/3407930/afd96986-fdbc-11e3-9f65-26da71525372.png)
![Default Form](https://cloud.githubusercontent.com/assets/7941092/3407937/ee32553a-fdbc-11e3-8153-c85a73d6163a.png)

2.お好きにレイアウトしてください。

![Layout](https://cloud.githubusercontent.com/assets/7941092/3407938/ee33c4f6-fdbc-11e3-8437-087c00c09dd3.png)

3.次に追加したい項目を単一行テキスト（Simple Line Text）で追加します。

![Simple Line Text](https://cloud.githubusercontent.com/assets/7941092/3407939/ee34b8f2-fdbc-11e3-8d2d-af611ca57e3d.png)

4.追加した項目にタイトルやレイアウトを設定しておきます。ここまでは普通の手順ですね。

![Set Title and Layout](https://cloud.githubusercontent.com/assets/7941092/3407940/ee3996ba-fdbc-11e3-8c43-53f834f9191e.png)

### カスタムフィールドに対応するシンプルテキストを作成

5.ここからがポイントです。まずはフォームを選択し、編集を全てに適用（Edit Together）のチェックを外しておきます。

![Uncheck Edit Together](https://cloud.githubusercontent.com/assets/7941092/3407941/ee3cb1a6-fdbc-11e3-810e-a666819ab082.png)


6.追加した項目の入力プロンプト（Show Prompt Text When Empty）を解除しておきます。

![Uncheck Show Prompt Text When Empty](https://cloud.githubusercontent.com/assets/7941092/3407942/ee3f9e52-fdbc-11e3-818a-60849a929350.png)

7.入力項目の塗りや線も消しちゃいます。

![Unset Fill and Stroke](https://cloud.githubusercontent.com/assets/7941092/3407943/ee52e566-fdbc-11e3-8d2d-0ba6adfe545f.png)

8.全てのステートで塗や線を消しておいてください。

![Apply All States](https://cloud.githubusercontent.com/assets/7941092/3407944/ee54f540-fdbc-11e3-9470-4f6ca6028e75.png)

9.幅も小さくしておきましょう。

![Set 1px Width](https://cloud.githubusercontent.com/assets/7941092/3407945/ee567528-fdbc-11e3-86cf-89a96dee1675.png)

10.3-9までを繰り返して必要な項目を全て設定します。新しい項目の編集時には直前の編集が一部引き継がれるので結構楽です。

![Image of Cutstom Text Field](https://cloud.githubusercontent.com/assets/7941092/3407946/ee5b7b86-fdbc-11e3-9c4a-48482602408f.png)

11.項目数によっては送信メッセージの位置を移動する必要があるので、これも忘れずに設定しておきましょう。

![Don't Forget Submit Message](https://cloud.githubusercontent.com/assets/7941092/3407947/ee5dfa50-fdbc-11e3-84a2-5da2996e4c87.png)

### カスタムフィールドを作成

12.ここでようやくカスタム項目を追加します。radio button, checkbox, selectのコードはfieldsetでまとめておきます。

![HTML Code](https://cloud.githubusercontent.com/assets/7941092/3407948/ee630798-fdbc-11e3-89bc-d795d1a68e45.png)

  - radio buttonの例  
 ```html
<fieldset data-role="controlgroup" data-type="horizontal">
  <input type="radio" name="radio1" id="radio1_1" value="item1">
  <label for="radio1_1">item1</label>
  <input type="radio" name="radio1" id="radio1_2" value="item2" style="margin-left:2em">
  <label for="radio1_2">item2</label>
  <input type="radio" name="radio1" id="radio1_3" value="item3" style="margin-left:2em">
  <label for="radio1_3">item3</label>
</fieldset>
```

  - checkboxの例  
 ```html
<fieldset data-role="controlgroup" data-type="horizontal">
  <input type="checkbox" name="checkbox1" id="checkbox1_1" value="item7">
  <label for="checkbox1_1">item7</label>
  <input type="checkbox" name="checkbox1" id="checkbox1_2" value="item8" style="margin-left:2em">
  <label for="checkbox1_2">item8</label>
  <input type="checkbox" name="checkbox1" id="checkbox1_3" value="item9" style="margin-left:2em">
  <label for="checkbox1_3">item9</label>
</fieldset>
```

  - selectの例  
 ```html
<fieldset data-role="controlgroup">
  <select name="select1">
    <option value="">Select...</option>
    <option value="item13">item13</option>
    <option value="item14">item14</option>
    <option value="item15">item15</option>
  </select>
</fieldset>
```

13.テキストのロールオーバーと合わせるため、入力なし（empty）のステートのテキストカラーに合わせておきます。

![Set Text Color](https://cloud.githubusercontent.com/assets/7941092/3407949/ee72ab26-fdbc-11e3-9075-b089a195f0b1.png)

14.12-13を繰り返して、必要なカスタムフィールドを追加していきます。

![Image of Cutstom Field](https://cloud.githubusercontent.com/assets/7941092/3407950/ee747e88-fdbc-11e3-8b33-982b90b8c1dc.png)

### マッピング

15.ここでいったんプレビューし、生成されたHTMLのidを確認します。

16.フォームおよび、カスタムフィールドとそのテキストフィールドのidをマッピングして、テキストエディタ等で以下のように記述します。

  - マッピングの例  
 ```html
<script type="text/javascript">
(function($) {
  $(function(){
    $('#widgetu69').CustomFormItems([     //id of form
      {id:"#widgetu111", name:"radio1"    },  //id of text-field and name of custom-field
      {id:"#widgetu126", name:"radio2"    },
      ...
      {id:"#widgetu166", name:"select4"   }
    ]);
  });
})(jQuery);
</script>
```  

  - ロールオーバー時のテキストカラーも設定します  
 ```html
<style type="text/css">
/*<![CDATA*/
<!--
fieldset:hover input, fieldset:hover label, fieldset:hover select { color: rgb(79, 79, 79); }
select { color: inherit; color: expression(this.parentNode.currentStyle.color); /* IE */ }
-->
/*]]*/
</style>
```

17.ページプロパティでheadに設定します。

  - コードに挿入する場合  
 ```html
<script src="scripts/jquery-1.8.3.min.js" type="text/javascript"></script>
<script type="text/javascript">
  //copy here
</script>
```  
のcopy hereに、jquery.muse.customform.min.jsの中身をコピーします。  

  - 外部リンクする場合  
 ```html
<script src="scripts/jquery-1.8.3.min.js" type="text/javascript"></script>
<script src="scripts/jquery.muse.customform.min.js" type="text/javascript"></script>
```  
外部リンクする場合は、独自に追加したファイルは手動アップロードが必要です。ローカルの場合はプレビュー時にも自動ではアップされませんので、ご注意ください。

上記のコードに続いて16の内容も設定します。

18.パブリッシュやHTMLコード生成して正常に動作することを確認します。  17で直接コードに挿入した場合は、プレビューでもOKです。

### JavaScript OFF時の対応

19.このままではJavaScript OFF時には正常に動作しませんので、対策します。  
フォームとカスタムフィールドを全て選択しグループ化します。 

![Group](https://cloud.githubusercontent.com/assets/7941092/3407951/ee7c17d8-fdbc-11e3-8be2-8a837a2c8d3e.png)

20.JavaScript OFF用のメッセージをテキストで作成し、段落スタイルでnoscriptとしておきます。

![Noscript class](https://cloud.githubusercontent.com/assets/7941092/3407952/ee7ea52a-fdbc-11e3-88af-9d4dfbcc1ddd.png)

21.20のメッセージはフォームの背面に置きます。 

![Send Backword](https://cloud.githubusercontent.com/assets/7941092/3407953/ee8623b8-fdbc-11e3-8eba-c672d13329b6.png)

22.いったんプレビューし、グループのidを確認します。

23.対策コードをページプロパティのheadに追加します。

  - グループの表示切替（set id of the group）  
 ```html
#u193 { display: none; }
html.js #u193 { display: block; }
```

  - メッセージの切替  
 ```html
.noscript { visibility: visible; }
html.js .noscript { visibility: hidden; }
```  
noscriptクラスは他でも使えるので、マスターに入れたり自分のカスタムcssに入れたりしてもOKです。

24.もう一度パブリッシュしてJavaScript OFF時の動作を確認します。

本サンプルの表示確認はこちら
-----

<http://toumai.businesscatalyst.com/muse-form.html>

最後に
-----

添付のjquery.muse.customform.jsを見てもらえればわかる通り、基本はsubmit時にカスタムフィールドの値をテキストフィールドに設定しているだけで、後はロールオーバーや入力時の動作を通常のテキストフィールドに合わせるような処理を追加しているだけです。  
他のケースで必要な処理はもちろん、他にももっと良いコードがありましたら、お好きなように書き換えてお使いください。
