<template>
  <div class="member-wrapper">
    <nav-bar :title=title></nav-bar>
    <div class="member-info">
      <cube-scroll>
        <div>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt; font-weight:bold">【首部及导言】</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">欢迎您使用</span><span style="font-family:宋体; font-size:12pt">{{appInfo.packageName}}</span><span
            style="font-family:宋体; font-size:12pt">黑钻</span><span style="font-family:宋体; font-size:12pt">会员服务！</span>
          </p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">为使用</span><span
            style="font-family:宋体; font-size:12pt">{{appInfo.packageName}}</span><span
            style="font-family:宋体; font-size:12pt">黑钻</span><span style="font-family:宋体; font-size:12pt">会员服务（简称为：本服务），您应当阅读并遵守《{{appInfo.packageName}}</span><span
            style="font-family:宋体; font-size:12pt">黑钻</span><span style="font-family:宋体; font-size:12pt">会员服务协议》（简称为：本协议）。请您务必审慎阅读、充分理解各条款内容，特别是免除或限制责任的相应条款，以及开通或使用某项服务的单独协议，并选择接受或不接受。免除或限制责任条款可能以加粗等形式提示您注意。</span>
          </p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">除非您已阅读并接受本协议所有条款，否则您无权使用本服务。您对本服务的任何购买或接受赠与等获取行为及登录、查看等任何使用行为即视为您已阅读并同意本协议的约束。</span>
          </p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">&#xa0;</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt; font-weight:bold">一、【协议的范围】</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">1.1【协议适用主体范围】</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">本协议是您与</span><span
            style="font-family:宋体; font-size:12pt">本</span><span style="font-family:宋体; font-size:12pt">公司之间关于用户使用相关服务所订立的协议。“</span><span
            style="font-family:宋体; font-size:12pt">本公司</span><span style="font-family:宋体; font-size:12pt">”是指及其相关服务可能存在的运营关联单位。“</span><span
            style="font-family:宋体; font-size:12pt">{{appInfo.packageName}}”是指提供的服务平台</span><span
            style="font-family:宋体; font-size:12pt">（以下简称</span><span
            style="font-family:宋体; font-size:12pt">：</span><span style="font-family:宋体; font-size:12pt">本平台）</span><span
            style="font-family:宋体; font-size:12pt">，包括但不限于APP、公众号、小程序。“用户”是指使用相关服务的使用人，在本协议中更多地称为“您”。</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">1.2【本服务内容】</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">本协议项下的服务是指向用户提供的包括但不限于即时通讯、网络媒体、互联网增值、互动娱乐、电子商务和广告等产品及服务（以下简称“本服务”）。</span>
          </p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">&#xa0;</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt; font-weight:bold">二、【关于本服务】</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt; font-weight:bold">本服务指按照</span><span
            style="font-family:宋体; font-size:12pt; font-weight:bold">本平台</span><span
            style="font-family:宋体; font-size:12pt; font-weight:bold">指定方式支付一定服务费用之后，用户可以享有由</span><span
            style="font-family:宋体; font-size:12pt; font-weight:bold">本平台</span><span
            style="font-family:宋体; font-size:12pt; font-weight:bold">或第三方提供的仅在</span><span
            style="font-family:宋体; font-size:12pt; font-weight:bold">本平台</span><span
            style="font-family:宋体; font-size:12pt; font-weight:bold">平台使用的产品服务、生活服务等方面增值的服务，简称为：本服务。</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">本平台</span><span style="font-family:宋体; font-size:12pt">会根据不同的产品及服务类型，推出不同的服务，目前，</span><span
            style="font-family:宋体; font-size:12pt">本平台</span><span style="font-family:宋体; font-size:12pt">提供</span><span
            style="font-family:宋体; font-size:12pt">黑钻</span><span style="font-family:宋体; font-size:12pt">会员服务，同时，</span><span
            style="font-family:宋体; font-size:12pt">本平台</span><span style="font-family:宋体; font-size:12pt">也可能会根据用户的需求、产品及服务类型的变化等，对现有服务种类进行调整以及不断推出新的服务种类。</span><span
            style="font-family:宋体; font-size:12pt">本平台</span><span style="font-family:宋体; font-size:12pt">也可能会在不同时间推出具体不同的服务内容，以不断完善、优化本服务。具体服务种类及服务内</span><span
            style="font-family:宋体; font-size:12pt">容以相关服务页面公布、实际提供的内容为准。您可以自行根据需要选择相应服务。</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">您所享有的本服务的具体内容可能会因为会员级别、是否开通年费、开通期限、您选择的具体服务类别等因素而有不同，通常高级别、开通年费服务、开通期限较长等情况下，您将会享有更多的服务，具体以相关服务页面公布、实际提供的内容为准。</span>
          </p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">特别提示：在您开通本服务后，</span><span
            style="font-family:宋体; font-size:12pt">本平台</span><span style="font-family:宋体; font-size:12pt">可能会根据本服务的整体规划向您提供各项广告服务。</span>
          </p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">您理解并同意：您通过</span><span
            style="font-family:宋体; font-size:12pt">本平台</span><span style="font-family:宋体; font-size:12pt">指定渠道开通本服务后，可能会由于您使用的软件版本、设备、操作系统等不同以及其他第三方原因等导致您实际可使用的具体服务及资费有差别，由此可能给您带来的不便，您表示理解，并不会因此向</span><span
            style="font-family:宋体; font-size:12pt">本平台</span><span
            style="font-family:宋体; font-size:12pt">提出任何主张或追究</span><span
            style="font-family:宋体; font-size:12pt">本平台</span><span style="font-family:宋体; font-size:12pt">的任何责任。</span>
          </p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">&#xa0;</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt; font-weight:bold">三、权利义务</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">3.1【关于收费】</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">本服务是</span><span
            style="font-family:宋体; font-size:12pt">本平台</span><span style="font-family:宋体; font-size:12pt">提供的收费服务，您须在按照本服务的收费标准支付相应费用后，方可使用本服务。此外，您可能也可以通过接受好友赠送等</span><span
            style="font-family:宋体; font-size:12pt">本平台</span><span style="font-family:宋体; font-size:12pt">认可的其他方式享有、使用本服务。</span>
          </p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">本平台</span><span style="font-family:宋体; font-size:12pt">可能会根据本服务的整体规划，对本服务相关权益细则、收费标准、方式等进行修改和变更，前述修改、变更，</span><span
            style="font-family:宋体; font-size:12pt">本平台</span><span style="font-family:宋体; font-size:12pt">将在相应服务页面进行展示。您若需要获取、使用本服务，请先提前了解清楚当时关于本服务的收费标准、方式等信息。</span>
          </p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">3.2【开通服务】</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">3.2.1【关于支付】</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">（</span><span style="font-family:宋体; font-size:12pt">1）您应该通过苹果应用内支付（IAP支付，in-app purchase）或第三方平台支付，银行卡扣款等多重形式,在依约支付一定费用后开通本服务。本服务开通之后，基础会员服务费用不可退还；</span>
          </p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">（</span><span style="font-family:宋体; font-size:12pt">2）您选择会员开通服务完成后付款，您本人清楚知晓且同意授权，从您的自有充值账户、与会员账号绑定的第三方支付账户、银行卡、通信账户、iTunes账</span><span
            style="font-family:宋体; font-size:12pt">户（以下统称“账户”）中扣除，您承诺前述委托扣款视同其本人作出，不得提出异议；</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">（</span><span style="font-family:宋体; font-size:12pt">3）支付方式说明：</span>
          </p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">苹果应用内支付：打开苹果手机“设置”</span><span
            style="font-family:宋体; font-size:12pt"> --&gt; 进入“iTunes Store 与 App Store”--&gt;点击 “Apple ID”，选择"查看Apple ID"，进入"账户设置"页面。</span>
          </p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">微信支付：本公司将根据您交易指令，从您的“零钱”或您关联的银行账户扣划相应资金至商户，账户需要您支持微信支付扣款。</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">银行卡扣款：需要您输入银行卡号，身份证、手机号，完成身份验证后授权扣款。</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">（</span><span
            style="font-family:宋体; font-size:12pt">4）会员自动续费服务是在您已开通</span><span style="font-family:宋体; font-size:12pt">黑钻</span><span
            style="font-family:宋体; font-size:12pt">会员服务的前提下，为您提供的自动续费服务。如您开通本服务，则视为您授权有权在您的</span><span
            style="font-family:宋体; font-size:12pt">黑钻</span><span style="font-family:宋体; font-size:12pt">会员即将到期时，从您账户余额中代扣下一个计费周期服务费。该服务实现的前提是您已将</span><span
            style="font-family:宋体; font-size:12pt">黑钻</span><span style="font-family:宋体; font-size:12pt">会员账号与上述账户绑定，且可成功从上述账户中扣款，因上述账户中可扣款余额不足导致的续费失败，由您自行承担；</span>
          </p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">（</span><span
            style="font-family:宋体; font-size:12pt">5）您明确了解并同意，</span><span
            style="font-family:宋体; font-size:12pt">本平台</span><span style="font-family:宋体; font-size:12pt">黑钻</span><span
            style="font-family:宋体; font-size:12pt">会员的付费方式为代收费运营商托收的付款方式，您通过此种付费方式付费可能存在一定的商业风险，包括但不限于不法分子利用您账户或银行卡等有价卡等进行违法活动，该等风险均会给您造成相应的经济损失。您应自行承担向侵权方追究侵权责任和追究责任不能的后果。</span>
          </p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">3.2.2【关于退款】</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">您清楚并同意，办理前已充分了解会员退款办理受理条件及退还比例等服务内容；</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">（</span><span style="font-family:宋体; font-size:12pt">1）会员费用因包含第三方平台服务，暂无法办理退货退款手续；；</span>
          </p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">（</span><span style="font-family:宋体; font-size:12pt">2）因不可抗力因素导致平台服务及支付取消或延期，</span><span
            style="font-family:宋体; font-size:12pt">本平台</span><span style="font-family:宋体; font-size:12pt">客服会主动与您确认变更或退款事宜，不收取任何其他手续费；办理退款或变更要求需符合时间规定；</span>
          </p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">（</span><span style="font-family:宋体; font-size:12pt">3）非不可抗力因素产生平台服务及支付取消或延期</span>
          </p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">（</span><span style="font-family:宋体; font-size:12pt">4）若在会员期间享受到至少一次信贷服务(成功获取贷款），则将不予退款。</span>
          </p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">提醒您注意：</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">办理退款或变更要求需符合时间规定、会员退款规定（请详细阅读</span><span
            style="font-family:宋体; font-size:12pt">黑钻</span><span
            style="font-family:宋体; font-size:12pt">会员页面广告说明）</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">根据项目不同，个别项目可能不适用“非不可抗力情况”的变更或退款，具体以</span><span
            style="font-family:宋体; font-size:12pt">项目宣传单面提示为准</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">3.2.3</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">您不得通过以下任何方式为自己或他人开通本服务：</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">（</span><span style="font-family:宋体; font-size:12pt">1）以营利、经营等非个人使用的目的为自己或他人开通本服务；</span>
          </p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">（</span><span style="font-family:宋体; font-size:12pt">2）通过任何机器人软件、蜘蛛软件、爬虫软件、刷屏软件等任何程序、软件方式为自己或他人开通本服务；</span>
          </p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">（</span><span style="font-family:宋体; font-size:12pt">3）通过任何不正当手段或以违反诚实信用原则的方式为自己或他人开通本服务；</span>
          </p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">（</span><span
            style="font-family:宋体; font-size:12pt">4）通过非</span><span
            style="font-family:宋体; font-size:12pt">本平台</span><span style="font-family:宋体; font-size:12pt">指定的方式为自己或他人开通本服务；</span>
          </p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">（</span><span
            style="font-family:宋体; font-size:12pt">5）通过侵犯</span><span
            style="font-family:宋体; font-size:12pt">本平台</span><span style="font-family:宋体; font-size:12pt">或他人合法权益的方式为自己或他人开通本服务；</span>
          </p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">（</span><span style="font-family:宋体; font-size:12pt">6）通过其他违反相关法律、行政法规、国家政策等的方式为自己或他人开通本服务。</span>
          </p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">3.3【服务期限】</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">3.3.1本服务</span><span style="font-family:宋体; font-size:12pt">的服务期限以您自行选择并支付相应服务费用的期限为准，您也可以登</span><span
            style="font-family:宋体; font-size:12pt">录</span><span style="font-family:宋体; font-size:12pt">本平台</span><span
            style="font-family:宋体; font-size:12pt">充值中心或者本服务的相应页面查询。</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">3.3.2本服务的服务开通最高期限会受到一定限制，具体以</span><span
            style="font-family:宋体; font-size:12pt">本平台</span><span
            style="font-family:宋体; font-size:12pt">制定的的规则为准。</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">3.4【行为规范】</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">3.4.1【五不准】</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">您在使用本服务时不得利用本服务从事以下行为，包括但不限于：</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">（</span><span style="font-family:宋体; font-size:12pt">1）发布、传送、传播、储存违反国家法律、危害国家安全统一、社会稳定、公序良俗、社会公德以及侮辱、诽谤、淫秽、暴力的内容；</span>
          </p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">（</span><span style="font-family:宋体; font-size:12pt">2）发布、传送、传播、储存侵害他人名誉权、肖像权、知识产权、商业秘密等合法权利的内容；</span>
          </p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">（</span><span style="font-family:宋体; font-size:12pt">3）虚构事实、隐瞒真相以误导、欺骗他人；</span>
          </p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">（</span><span style="font-family:宋体; font-size:12pt">4）发表、传送、传播广告信息及垃圾信息；</span>
          </p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">（</span><span style="font-family:宋体; font-size:12pt">5）从事其他违反法律法规、政策及公序良俗、社会公德等的行为。</span>
          </p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">3.4.2【用户禁止行为】</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">本服务仅供您个人使用，除非经</span><span
            style="font-family:宋体; font-size:12pt">本平台</span><span style="font-family:宋体; font-size:12pt">书面许可，您不得进行以下行为：</span>
          </p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">（</span><span style="font-family:宋体; font-size:12pt">1）通过任何方式搜集本服务中其他用户的用户名、电子邮件等相关信息，并以发送垃圾邮件、连锁邮件、垃圾短信、即时消息等方式干扰、骚扰其他用户；</span>
          </p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">（</span><span style="font-family:宋体; font-size:12pt">2）通过本服务发布包含广告、宣传、促销等内容的信息；</span>
          </p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">（</span><span
            style="font-family:宋体; font-size:12pt">3）将本服务再次许可他人使用；</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">（</span><span
            style="font-family:宋体; font-size:12pt">4）其他未经</span><span
            style="font-family:宋体; font-size:12pt">本平台</span><span
            style="font-family:宋体; font-size:12pt">书面许可的行为。</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">3.4.3【对自己行为负责】</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">您充分了解并同意，您必须为自己注册帐号下的一切行为负责，包括但不限于您所发表的任何内容以及由此产生的任何后果。您应对本服务中的内容自行加以判断，并承担因使用内容而引起的所有风险，包括因对内容的正确性、完整性或实用性的依赖而产生的风险。</span>
          </p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">3.5【服务的变更、中止或终止】</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">您充分了解并同意，由于互联网服务的特殊性，</span><span
            style="font-family:宋体; font-size:12pt">本平台</span><span style="font-family:宋体; font-size:12pt">可能会按照相关法规、双方约定或在其他必要时，中止或终止向您提供本服务，届时，</span><span
            style="font-family:宋体; font-size:12pt">本平台</span><span
            style="font-family:宋体; font-size:12pt">会依法保护您的合法权益。</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">&#xa0;</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt; font-weight:bold">四、【违约责任】</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">4.1如果</span><span
            style="font-family:宋体; font-size:12pt">本平台</span><span style="font-family:宋体; font-size:12pt">发现或收到他人举报您有违反本协议任何行为的，</span><span
            style="font-family:宋体; font-size:12pt">本平台</span><span style="font-family:宋体; font-size:12pt">有权依法进行独立判断并采取技术手段予以删除、屏蔽或断开相关的信息。同时，</span><span
            style="font-family:宋体; font-size:12pt">本平台</span><span style="font-family:宋体; font-size:12pt">有权视您的行为性质，对您采取包括但不限于暂停或终止部分或全部本服务、中止或终止您对注册ID号码使用、追究您法律责任等措施，</span><span
            style="font-family:宋体; font-size:12pt">本平台</span><span style="font-family:宋体; font-size:12pt">也无需向您退还任何费用，而由此给您带来的损失（包括但不限于通信中断、相关数据清空、未使用的服务费用作为违约金而归</span><span
            style="font-family:宋体; font-size:12pt">本平台</span><span
            style="font-family:宋体; font-size:12pt">所有等），由您自行承担，造成</span><span
            style="font-family:宋体; font-size:12pt">本平台</span><span
            style="font-family:宋体; font-size:12pt">损失的，您也应予以赔偿。</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">4.2【对第三方损害的处理】</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">您有违反本协议任何行为，导致任何第三方损害的，您应当独立承担责任；</span><span
            style="font-family:宋体; font-size:12pt">本平台</span><span style="font-family:宋体; font-size:12pt">因此遭受损失的，您也应当一并赔偿；</span>
          </p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">&#xa0;</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt; font-weight:bold">五、【其他】</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">5.1【协议的生效】</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">您使用本服务即视为您已阅读并同意受本协议的约束。</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">5.2【协议签订地】</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">本协议签订地为中华人民共和国上海市闵行区</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">5.3【适用法律】</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">本协议的成立、生效、履行、解释及纠纷解决，适用中华人民共和国大陆地区法律（不包括冲突法）。</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">5.4【争议解决】</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">若您和</span><span
            style="font-family:宋体; font-size:12pt">本平台</span><span style="font-family:宋体; font-size:12pt">之间发生任何纠纷或争议，首先应友好协商解决；协商不成的，您同意将纠纷或争议提交本协议签订地有管辖权的人民法院管辖。</span>
          </p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">5.5【条款标题】</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">本协议所有条款的标题仅为阅读方便，本身并无实际涵义，不能作为本协议涵义解释的依据。</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">5.6【条款效力】</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">本协议条款无论因何种原因部分无效或不可执行，其余条款仍有效，对双方具有约束力。</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">&#xa0;</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt; font-weight:bold">六</span><span
            style="font-family:宋体; font-size:12pt; font-weight:bold">.【隐私协议】</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">本协议条款请参考《隐私政策》，</span><span style="font-family:宋体; font-size:12pt">无论因何种原因部分无效或不可执行，其余条款仍有效，对双方具有约束力。</span>
          </p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">&#xa0;</span></p>
          <p style="font-size:12pt; line-height:150%; margin:0pt; orphans:0; text-align:justify; widows:0"><span
            style="font-family:宋体; font-size:12pt">公司</span><span style="font-family:宋体; font-size:12pt">：{{appInfo.subject}}</span>
          </p>
        </div>
        <div class="cnzz" style="display: none;">
        </div>
      </cube-scroll>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import { getAppInfo, showAppTabBar } from 'common/js/utils-app'
import navBar from 'components/navBar/navBar'

export default {
  data () {
    return {
      appInfo: '',
      title: '会员服务协议'
    }
  },
  beforeRouteEnter (to, from, next) {
    const SHOW_BOTTOM_TAB_BAR = to.params.showBottomTabBar
    showAppTabBar(SHOW_BOTTOM_TAB_BAR)
    next()
  },
  created () {
    this._getAppInfo()
  },
  methods: {
    _getAppInfo () {
      this.appInfo = getAppInfo()
    }
  },
  components: {
    navBar: navBar
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .member-wrapper
    position: fixed
    top: 0
    left: 0
    bottom: 0
    right: 0
    z-index: 20
    background: #fff
    .member-info
      position: absolute
      top: 98px
      bottom: 0
      left: 0
      right: 0
      padding: 20px
</style>
