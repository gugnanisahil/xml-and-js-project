(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const credit_data = require("../Data/new.json");

const getAll = ({ full_name, city, credit, country }={}) =>
  new Promise((resolve) => {
    let result = Array.from(credit_data);
    if (full_name) {
      result = result.filter((item) => item.full_name === full_name);
    }

    if (city) {
      result = result.filter((item) => item.city === city);
    }

    if (country) {
      result = result.filter((item) => item.country === country);
    }

    if (credit) {
      result = result.filter((item) => item.credit == credit);
    }
    resolve({ code: 200, data: result });
  });

const getById = (credit) =>
  new Promise((resolve) => {
    const card = card_data.find((card) => card.credit == credit);

    if (product) {
      resolve({ code: 200, data: card });
    } else {
      resolve({
        code: 404,
        data: { message: `No information found for card ${card}` },
      });
    }
  });

module.exports = {
  getAll,
  getById,
};
},{"../Data/new.json":2}],2:[function(require,module,exports){
module.exports=[{"id":1,"full_name":"Quintina Stellman","email":"qstellman0@free.fr","credit":"3569681001314347","type":"jcb","city":"Banjiang","country":"CN"},
    {"id":2,"full_name":"Matias Painter","email":"mpainter1@unesco.org","credit":"4936541919145168256","type":"switch","city":"Penalva de Alva","country":"PT"},
    {"id":3,"full_name":"Tresa Gook","email":"tgook2@parallels.com","credit":"342642378497909","type":"americanexpress","city":"Zaokskiy","country":"RU"},
    {"id":4,"full_name":"Maxine Opdenort","email":"mopdenort3@apache.org","credit":"5565092227840975","type":"mastercard","city":"Umi","country":"JP"},
    {"id":5,"full_name":"Lazare Jeandillou","email":"ljeandillou4@networksolutions.com","credit":"5641825928260784476","type":"switch","city":"A dos Cunhados","country":"PT"},
    {"id":6,"full_name":"Northrop Izakovitz","email":"nizakovitz5@1688.com","credit":"5310174933807080","type":"mastercard","city":"Bongao","country":"PH"},
    {"id":7,"full_name":"Giuseppe Janousek","email":"gjanousek6@tmall.com","credit":"3538359135387665","type":"jcb","city":"Lewodoli","country":"ID"},
    {"id":8,"full_name":"Andie Mugglestone","email":"amugglestone7@hostgator.com","credit":"201504519674228","type":"diners-club-enroute","city":"Quatro Barras","country":"BR"},
    {"id":9,"full_name":"Claude Pledge","email":"cpledge8@shinystat.com","credit":"5108756062058851","type":"mastercard","city":"Benger","country":"ID"},
    {"id":10,"full_name":"Misti Sego","email":"msego9@vk.com","credit":"5048378592850146","type":"mastercard","city":"Trnovska Vas","country":"SI"},
    {"id":11,"full_name":"Keven Geraldo","email":"kgeraldoa@timesonline.co.uk","credit":"5602255868128071172","type":"china-unionpay","city":"Uruçuca","country":"BR"},
    {"id":12,"full_name":"Alvy Mattiacci","email":"amattiaccib@vk.com","credit":"30596742595771","type":"diners-club-carte-blanche","city":"Cerava","country":"AL"},
    {"id":13,"full_name":"Derwin Dhennin","email":"ddhenninc@barnesandnoble.com","credit":"5007665559314457","type":"mastercard","city":"Yakutsk","country":"RU"},
    {"id":14,"full_name":"Adrianna Caddan","email":"acaddand@usnews.com","credit":"5100131161208575","type":"mastercard","city":"Quebracho","country":"UY"},
    {"id":15,"full_name":"Cosmo O'Longain","email":"colongaine@1688.com","credit":"3552764584103086","type":"jcb","city":"Coelho Neto","country":"BR"},
    {"id":16,"full_name":"Marti Pilbeam","email":"mpilbeamf@creativecommons.org","credit":"3542780947131047","type":"jcb","city":"Nikki","country":"BJ"},
    {"id":17,"full_name":"Humbert Cole","email":"hcoleg@nps.gov","credit":"3558332946931042","type":"jcb","city":"Tenjolaya","country":"ID"},
    {"id":18,"full_name":"Heinrick Colls","email":"hcollsh@senate.gov","credit":"5602210620267688","type":"bankcard","city":"Áno Sýros","country":"GR"},
    {"id":19,"full_name":"Kirsteni Logesdale","email":"klogesdalei@163.com","credit":"3573305289259461","type":"jcb","city":"Hörby","country":"SE"},
    {"id":20,"full_name":"Anet Gatherer","email":"agathererj@cnn.com","credit":"3546303996273143","type":"jcb","city":"Przesmyki","country":"PL"},
    {"id":21,"full_name":"Gill Cribbins","email":"gcribbinsk@flavors.me","credit":"560224970043567046","type":"china-unionpay","city":"Três Lagoas","country":"BR"},
    {"id":22,"full_name":"Viviana Giacopini","email":"vgiacopinil@ucoz.ru","credit":"3571569659360934","type":"jcb","city":"Furongqiao","country":"CN"},
    {"id":23,"full_name":"Cindy Thomazet","email":"cthomazetm@people.com.cn","credit":"3560074994234723","type":"jcb","city":"Usa River","country":"TZ"},
    {"id":24,"full_name":"Gisela Guilaem","email":"gguilaemn@wikia.com","credit":"3588305800473917","type":"jcb","city":"Amalfi","country":"CO"},
    {"id":25,"full_name":"Laurene Rook","email":"lrooko@nih.gov","credit":"560222037068283560","type":"china-unionpay","city":"Ballivor","country":"IE"},
    {"id":26,"full_name":"Juieta Fevier","email":"jfevierp@businesswire.com","credit":"30169968467487","type":"diners-club-carte-blanche","city":"Metz","country":"FR"},
    {"id":27,"full_name":"Appolonia Martinetto","email":"amartinettoq@newyorker.com","credit":"56101838955685568","type":"china-unionpay","city":"Épinal","country":"FR"},
    {"id":28,"full_name":"Darda Skunes","email":"dskunesr@google.fr","credit":"5602254313431984051","type":"china-unionpay","city":"Kafachan","country":"NG"},
    {"id":29,"full_name":"Etienne Campey","email":"ecampeys@addtoany.com","credit":"3570669815958984","type":"jcb","city":"Santiago","country":"PH"},
    {"id":30,"full_name":"Webb Kiwitz","email":"wkiwitzt@newsvine.com","credit":"30222096235159","type":"diners-club-carte-blanche","city":"Jinrui","country":"CN"},
    {"id":31,"full_name":"Gwyneth Snar","email":"gsnaru@archive.org","credit":"3540892988085305","type":"jcb","city":"Kosai-shi","country":"JP"},
    {"id":32,"full_name":"Welbie Shirrell","email":"wshirrellv@nytimes.com","credit":"3582121367045402","type":"jcb","city":"Uttar Char Fasson","country":"BD"},
    {"id":33,"full_name":"Meade Dyball","email":"mdyballw@answers.com","credit":"5427994732983141","type":"diners-club-us-ca","city":"Nueva Loja","country":"EC"},
    {"id":34,"full_name":"Iona Lauritzen","email":"ilauritzenx@nsw.gov.au","credit":"3541481297871461","type":"jcb","city":"Sīnah","country":"IQ"},
    {"id":35,"full_name":"Merle Kidd","email":"mkiddy@networksolutions.com","credit":"3530019627376950","type":"jcb","city":"Ishige","country":"JP"},
    {"id":36,"full_name":"Mathias Cosford","email":"mcosfordz@lulu.com","credit":"3564705853225528","type":"jcb","city":"Timmins","country":"CA"},
    {"id":37,"full_name":"Hilliard Haywood","email":"hhaywood10@51.la","credit":"3556872339992483","type":"jcb","city":"Ocoruro","country":"PE"},
    {"id":38,"full_name":"Madeline Saltman","email":"msaltman11@patch.com","credit":"5100146040273426","type":"mastercard","city":"Kvitok","country":"RU"},
    {"id":39,"full_name":"Jacob Rowthorn","email":"jrowthorn12@sciencedirect.com","credit":"5536158896467105","type":"diners-club-us-ca","city":"Montceau-les-Mines","country":"FR"},
    {"id":40,"full_name":"Neall Williams","email":"nwilliams13@redcross.org","credit":"633110866498207280","type":"switch","city":"Huanghuatan","country":"CN"},
    {"id":41,"full_name":"Paule McKeighen","email":"pmckeighen14@miibeian.gov.cn","credit":"374288219111910","type":"americanexpress","city":"Jamaica","country":"US"},
    {"id":42,"full_name":"Morena Waplington","email":"mwaplington15@forbes.com","credit":"560224289788943068","type":"china-unionpay","city":"Kolpny","country":"RU"},
    {"id":43,"full_name":"Web Jurges","email":"wjurges16@hubpages.com","credit":"4917401635130739","type":"visa-electron","city":"Cujillo","country":"PE"},
    {"id":44,"full_name":"Janene Baseley","email":"jbaseley17@comsenz.com","credit":"3558018743705982","type":"jcb","city":"Cacequi","country":"BR"},
    {"id":45,"full_name":"Thornie Bromell","email":"tbromell18@nifty.com","credit":"3567003012794874","type":"jcb","city":"Millet","country":"CA"},
    {"id":46,"full_name":"Peadar Keach","email":"pkeach19@goodreads.com","credit":"4041374892677","type":"visa","city":"Basseterre","country":"KN"},
    {"id":47,"full_name":"Hillier Meriguet","email":"hmeriguet1a@earthlink.net","credit":"3553367860808227","type":"jcb","city":"Bang Lamung","country":"TH"},
    {"id":48,"full_name":"Margalit Gillaspy","email":"mgillaspy1b@wp.com","credit":"5018589354540867","type":"maestro","city":"San Jose","country":"US"},
    {"id":49,"full_name":"Elmore Kellough","email":"ekellough1c@123-reg.co.uk","credit":"5100138297511020","type":"mastercard","city":"Xiaoying","country":"CN"},
    {"id":50,"full_name":"Lombard Curman","email":"lcurman1d@booking.com","credit":"6378561564772350","type":"instapayment","city":"Gävle","country":"SE"},
    {"id":51,"full_name":"Agnola Hammerstone","email":"ahammerstone1e@msu.edu","credit":"3569123864570111","type":"jcb","city":"Göteborg","country":"SE"},
    {"id":52,"full_name":"Daven Codron","email":"dcodron1f@umich.edu","credit":"670925230724244087","type":"laser","city":"Galatás","country":"GR"},
    {"id":53,"full_name":"Farica Neale","email":"fneale1g@angelfire.com","credit":"337941299634823","type":"americanexpress","city":"Boden","country":"SE"},
    {"id":54,"full_name":"Paco Piens","email":"ppiens1h@t-online.de","credit":"5002350988795817","type":"mastercard","city":"Ninh Giang","country":"VN"},
    {"id":55,"full_name":"Giraldo Beddows","email":"gbeddows1i@fotki.com","credit":"30244249377480","type":"diners-club-carte-blanche","city":"Cinyasag","country":"ID"},
    {"id":56,"full_name":"Dosi Groger","email":"dgroger1j@mashable.com","credit":"5010125960091728","type":"mastercard","city":"Rifu","country":"JP"},
    {"id":57,"full_name":"Major Hasel","email":"mhasel1k@g.co","credit":"3538621190040061","type":"jcb","city":"Semarapura","country":"ID"},
    {"id":58,"full_name":"Domini Witling","email":"dwitling1l@cnn.com","credit":"4175000588948779","type":"visa-electron","city":"Nangerang","country":"ID"},
    {"id":59,"full_name":"Lyda Larby","email":"llarby1m@narod.ru","credit":"6371699612762101","type":"instapayment","city":"Mambi","country":"ID"},
    {"id":60,"full_name":"Jobey Parradice","email":"jparradice1n@topsy.com","credit":"3530154988694459","type":"jcb","city":"Huajialing","country":"CN"},
    {"id":61,"full_name":"Giuditta Toffel","email":"gtoffel1o@4shared.com","credit":"201633807202903","type":"diners-club-enroute","city":"Arneiro","country":"PT"},
    {"id":62,"full_name":"Itch Pinchon","email":"ipinchon1p@apple.com","credit":"3543587704429160","type":"jcb","city":"Yujia","country":"CN"},
    {"id":63,"full_name":"Arlene Shills","email":"ashills1q@irs.gov","credit":"3560892877110086","type":"jcb","city":"Bharatpur","country":"NP"},
    {"id":64,"full_name":"Newton Eckley","email":"neckley1r@paginegialle.it","credit":"3541291882535631","type":"jcb","city":"Zapolyarnyy","country":"RU"},
    {"id":65,"full_name":"Katherine Gooley","email":"kgooley1s@auda.org.au","credit":"56022473197303261","type":"china-unionpay","city":"Icheon-si","country":"KR"},
    {"id":66,"full_name":"Allen Ephson","email":"aephson1t@a8.net","credit":"3577123505272846","type":"jcb","city":"Nowy Dwór Gdański","country":"PL"},
    {"id":67,"full_name":"Eulalie Mayhead","email":"emayhead1u@domainmarket.com","credit":"3564390562515475","type":"jcb","city":"Areia Branca","country":"BR"},
    {"id":68,"full_name":"Melli Mc Caughan","email":"mmc1v@sbwire.com","credit":"3568602526213625","type":"jcb","city":"Cubatão","country":"BR"},
    {"id":69,"full_name":"Loise Sefton","email":"lsefton1w@jiathis.com","credit":"30200483384699","type":"diners-club-carte-blanche","city":"Abua","country":"NG"},
    {"id":70,"full_name":"Caressa Hold","email":"chold1x@freewebs.com","credit":"3533160807298064","type":"jcb","city":"Araruama","country":"BR"},
    {"id":71,"full_name":"Alfredo Goldstein","email":"agoldstein1y@google.com.au","credit":"3530201101154554","type":"jcb","city":"Brunflo","country":"SE"},
    {"id":72,"full_name":"Vaclav Drage","email":"vdrage1z@webs.com","credit":"3550515686895330","type":"jcb","city":"Sangpi","country":"CN"},
    {"id":73,"full_name":"Stavros Britland","email":"sbritland20@cbc.ca","credit":"3539633613128091","type":"jcb","city":"Mehron","country":"TJ"},
    {"id":74,"full_name":"Anastassia Hayley","email":"ahayley21@huffingtonpost.com","credit":"3566005448621630","type":"jcb","city":"Shinjō","country":"JP"},
    {"id":75,"full_name":"Culley Harback","email":"charback22@tumblr.com","credit":"3575718764103244","type":"jcb","city":"Nanqi","country":"CN"},
    {"id":76,"full_name":"Bernie Pavolillo","email":"bpavolillo23@ifeng.com","credit":"201682815178357","type":"diners-club-enroute","city":"Bukuru","country":"NG"},
    {"id":77,"full_name":"Kissiah Bothbie","email":"kbothbie24@myspace.com","credit":"3575884662999917","type":"jcb","city":"São Vicente de Ferreira","country":"PT"},
    {"id":78,"full_name":"Arni Redsell","email":"aredsell25@newyorker.com","credit":"4017951746620878","type":"visa","city":"Celestynów","country":"PL"},
    {"id":79,"full_name":"Ellissa Westley","email":"ewestley26@earthlink.net","credit":"6763062204117216","type":"maestro","city":"Suḩayl Shibām","country":"YE"},
    {"id":80,"full_name":"Kary Humble","email":"khumble27@sourceforge.net","credit":"3552048174814058","type":"jcb","city":"Verkhniy Kurkuzhin","country":"RU"},
    {"id":81,"full_name":"Merlina Von Oertzen","email":"mvon28@unblog.fr","credit":"5459125448589937","type":"mastercard","city":"Bairro","country":"PT"},
    {"id":82,"full_name":"Zuzana Ebbetts","email":"zebbetts29@usnews.com","credit":"3551185327202442","type":"jcb","city":"Babakankadu","country":"ID"},
    {"id":83,"full_name":"Darla Siggery","email":"dsiggery2a@ucsd.edu","credit":"3534515228739401","type":"jcb","city":"Bayt Liqyā","country":"PS"},
    {"id":84,"full_name":"Darelle Itzig","email":"ditzig2b@flickr.com","credit":"5641820130997922","type":"switch","city":"Nkoteng","country":"CM"},
    {"id":85,"full_name":"Tandi Tootell","email":"ttootell2c@bigcartel.com","credit":"5406318632274283","type":"mastercard","city":"Santa Rosa","country":"MX"},
    {"id":86,"full_name":"Lance Fronczak","email":"lfronczak2d@comsenz.com","credit":"3552468781527192","type":"jcb","city":"Falköping","country":"SE"},
    {"id":87,"full_name":"Normand Loseke","email":"nloseke2e@wired.com","credit":"633437731509874351","type":"solo","city":"Gahe","country":"CN"},
    {"id":88,"full_name":"Sheelah Gavini","email":"sgavini2f@statcounter.com","credit":"3571129985889732","type":"jcb","city":"Strawczyn","country":"PL"},
    {"id":89,"full_name":"Malvina Dictus","email":"mdictus2g@tinyurl.com","credit":"3536267552619829","type":"jcb","city":"Tenggong","country":"ID"},
    {"id":90,"full_name":"Ken Pitfield","email":"kpitfield2h@cbc.ca","credit":"3545842645082034","type":"jcb","city":"Yandun","country":"CN"},
    {"id":91,"full_name":"Bjorn Beverstock","email":"bbeverstock2i@ning.com","credit":"3571557408171306","type":"jcb","city":"Valdemarsvik","country":"SE"},
    {"id":92,"full_name":"Hugh Cutforth","email":"hcutforth2j@mashable.com","credit":"3581589902687329","type":"jcb","city":"Thul","country":"PK"},
    {"id":93,"full_name":"Ursulina Gullan","email":"ugullan2k@army.mil","credit":"201500149098994","type":"diners-club-enroute","city":"Pandean","country":"ID"},
    {"id":94,"full_name":"Travers Bartaloni","email":"tbartaloni2l@webs.com","credit":"5602227206564890","type":"bankcard","city":"Daru","country":"SL"},
    {"id":95,"full_name":"Mada De Malchar","email":"mde2m@intel.com","credit":"5602216636685110","type":"bankcard","city":"Sobo","country":"ID"},
    {"id":96,"full_name":"Michelle Skerritt","email":"mskerritt2n@guardian.co.uk","credit":"30192547611425","type":"diners-club-carte-blanche","city":"Los Dos Caminos","country":"VE"},
    {"id":97,"full_name":"Feliks Lawrenz","email":"flawrenz2o@blog.com","credit":"3589597391030853","type":"jcb","city":"Xingyuan","country":"CN"},
    {"id":98,"full_name":"Ardith Childers","email":"achilders2p@nps.gov","credit":"3551926682101533","type":"jcb","city":"Greenville","country":"US"},
    {"id":99,"full_name":"Katey Ibbotson","email":"kibbotson2q@sun.com","credit":"201775158500615","type":"diners-club-enroute","city":"Ostrowite","country":"PL"},
    {"id":100,"full_name":"Sula Beadnall","email":"sbeadnall2r@163.com","credit":"3569737905950170","type":"jcb","city":"San Pedro","country":"CR"},
    {"id":101,"full_name":"Haley Zanelli","email":"hzanelli2s@dot.gov","credit":"3571806946963389","type":"jcb","city":"Yanas","country":"PE"},
    {"id":102,"full_name":"Missy O' Hogan","email":"mo2t@w3.org","credit":"5502834922885276","type":"mastercard","city":"Yujia’ao","country":"CN"},
    {"id":103,"full_name":"Austine Vase","email":"avase2u@myspace.com","credit":"676206063765685315","type":"maestro","city":"Daoxian","country":"CN"},
    {"id":104,"full_name":"Reuven Rutledge","email":"rrutledge2v@upenn.edu","credit":"6331105307043615943","type":"switch","city":"Wuyun","country":"CN"},
    {"id":105,"full_name":"Evelina Gors","email":"egors2w@godaddy.com","credit":"3551544927490908","type":"jcb","city":"Uddevalla","country":"SE"},
    {"id":106,"full_name":"Dale Monkman","email":"dmonkman2x@economist.com","credit":"4041598193763469","type":"visa","city":"Huangxikou","country":"CN"},
    {"id":107,"full_name":"Sully Moralas","email":"smoralas2y@blog.com","credit":"3539187925849837","type":"jcb","city":"Niujiang","country":"CN"},
    {"id":108,"full_name":"Elicia Billson","email":"ebillson2z@youtube.com","credit":"4913109933089754","type":"visa-electron","city":"Yuanbao","country":"CN"},
    {"id":109,"full_name":"Micheal Laven","email":"mlaven30@infoseek.co.jp","credit":"5048378559544294","type":"mastercard","city":"Kalmar","country":"SE"},
    {"id":110,"full_name":"Denny Goodship","email":"dgoodship31@accuweather.com","credit":"5002353688468453","type":"mastercard","city":"Idtig","country":"PH"},
    {"id":111,"full_name":"Janna Andreasson","email":"jandreasson32@redcross.org","credit":"3552323591703261","type":"jcb","city":"Pasvalys","country":"LT"},
    {"id":112,"full_name":"Matelda Livermore","email":"mlivermore33@infoseek.co.jp","credit":"201938852451739","type":"diners-club-enroute","city":"Pegongan","country":"ID"},
    {"id":113,"full_name":"Laurice Crowcher","email":"lcrowcher34@1688.com","credit":"6759587396258890589","type":"maestro","city":"Eshan","country":"CN"},
    {"id":114,"full_name":"Bink Mockler","email":"bmockler35@soundcloud.com","credit":"374288082874255","type":"americanexpress","city":"Annopol","country":"PL"},
    {"id":115,"full_name":"Bobbi Stapleton","email":"bstapleton36@woothemes.com","credit":"3583296693355813","type":"jcb","city":"Kenamoen","country":"ID"},
    {"id":116,"full_name":"Elset Barbery","email":"ebarbery37@csmonitor.com","credit":"3532556002601302","type":"jcb","city":"Tiannan","country":"CN"},
    {"id":117,"full_name":"Corine de Leon","email":"cde38@nifty.com","credit":"561092871147189652","type":"china-unionpay","city":"Yiqi","country":"CN"},
    {"id":118,"full_name":"Calida Abbotts","email":"cabbotts39@sogou.com","credit":"3571803083898908","type":"jcb","city":"Doyong","country":"PH"},
    {"id":119,"full_name":"Arvy Treven","email":"atreven3a@google.ca","credit":"4844626932939089","type":"visa-electron","city":"Nara","country":"ML"},
    {"id":120,"full_name":"Thurston Broschke","email":"tbroschke3b@amazon.com","credit":"337941623399960","type":"americanexpress","city":"Quibdó","country":"CO"},
    {"id":121,"full_name":"Perkin Linney","email":"plinney3c@sitemeter.com","credit":"346027363451572","type":"americanexpress","city":"Baton Rouge","country":"US"},
    {"id":122,"full_name":"Angelo Thripp","email":"athripp3d@nps.gov","credit":"3569470546078918","type":"jcb","city":"Krahës","country":"AL"},
    {"id":123,"full_name":"Leon Benezeit","email":"lbenezeit3e@biblegateway.com","credit":"342056172578691","type":"americanexpress","city":"Münster","country":"DE"},
    {"id":124,"full_name":"Lorinda Falloon","email":"lfalloon3f@timesonline.co.uk","credit":"503844149074700715","type":"maestro","city":"Danderyd","country":"SE"},
    {"id":125,"full_name":"Odella Scammell","email":"oscammell3g@wikipedia.org","credit":"30295835551656","type":"diners-club-carte-blanche","city":"Sayansk","country":"RU"},
    {"id":126,"full_name":"Marijn Merrick","email":"mmerrick3h@technorati.com","credit":"3534276384719337","type":"jcb","city":"Bodzechów","country":"PL"},
    {"id":127,"full_name":"Ola Rigbye","email":"origbye3i@zdnet.com","credit":"50181908671988723","type":"maestro","city":"Jargalant","country":"MN"},
    {"id":128,"full_name":"Luis Pidler","email":"lpidler3j@illinois.edu","credit":"4903089631945284930","type":"switch","city":"L'Aigle","country":"FR"},
    {"id":129,"full_name":"Adolphe Fulop","email":"afulop3k@jiathis.com","credit":"3581215528406429","type":"jcb","city":"Yingdianjie","country":"CN"},
    {"id":130,"full_name":"Wandis McGrann","email":"wmcgrann3l@discuz.net","credit":"3561222030292440","type":"jcb","city":"Hongtang","country":"CN"},
    {"id":131,"full_name":"Syd Innis","email":"sinnis3m@imgur.com","credit":"201760334663313","type":"diners-club-enroute","city":"Rzgów","country":"PL"},
    {"id":132,"full_name":"Harmon Bachellier","email":"hbachellier3n@tripod.com","credit":"3545719197082010","type":"jcb","city":"Daqingshan","country":"CN"},
    {"id":133,"full_name":"Rosamund Stormont","email":"rstormont3o@discovery.com","credit":"5602215639270805","type":"bankcard","city":"Staraya Toropa","country":"RU"},
    {"id":134,"full_name":"Aurie Beacroft","email":"abeacroft3p@imdb.com","credit":"3537582770634312","type":"jcb","city":"Ngrowo","country":"ID"},
    {"id":135,"full_name":"Cooper Mattiacci","email":"cmattiacci3q@yellowpages.com","credit":"30452844600285","type":"diners-club-carte-blanche","city":"Rakitnoye","country":"RU"},
    {"id":136,"full_name":"Haley Eccles","email":"heccles3r@google.co.uk","credit":"3587188403560590","type":"jcb","city":"Ben Arous","country":"TN"},
    {"id":137,"full_name":"Salem Senton","email":"ssenton3s@nasa.gov","credit":"3575734653052384","type":"jcb","city":"Sandnes","country":"NO"},
    {"id":138,"full_name":"Thalia Garr","email":"tgarr3t@deviantart.com","credit":"4508572586432095","type":"visa-electron","city":"Ledeč nad Sázavou","country":"CZ"},
    {"id":139,"full_name":"Yoshi Sketh","email":"ysketh3u@infoseek.co.jp","credit":"6304374682648422","type":"laser","city":"Nonghe","country":"CN"},
    {"id":140,"full_name":"Lusa Tripon","email":"ltripon3v@nhs.uk","credit":"201618264607702","type":"diners-club-enroute","city":"Dordrecht","country":"NL"},
    {"id":141,"full_name":"Mitchael Musico","email":"mmusico3w@marriott.com","credit":"3577296268803211","type":"jcb","city":"Svetlyy","country":"RU"},
    {"id":142,"full_name":"Maurice Stockall","email":"mstockall3x@sakura.ne.jp","credit":"337941386686363","type":"americanexpress","city":"Charlotte","country":"US"},
    {"id":143,"full_name":"Adham Rummin","email":"arummin3y@surveymonkey.com","credit":"3575996097166159","type":"jcb","city":"Hernando","country":"AR"},
    {"id":144,"full_name":"Tobi Andress","email":"tandress3z@parallels.com","credit":"3551131201887098","type":"jcb","city":"La Guacamaya","country":"HN"},
    {"id":145,"full_name":"Sheridan Toffanelli","email":"stoffanelli40@free.fr","credit":"3563033799175439","type":"jcb","city":"Łobżenica","country":"PL"},
    {"id":146,"full_name":"Stormy Delacourt","email":"sdelacourt41@hao123.com","credit":"3531753226730956","type":"jcb","city":"Piraí do Sul","country":"BR"},
    {"id":147,"full_name":"Nathan Whitely","email":"nwhitely42@elpais.com","credit":"3558284691050447","type":"jcb","city":"Gómez","country":"PA"},
    {"id":148,"full_name":"Kevin Moorman","email":"kmoorman43@blogtalkradio.com","credit":"4913661128287429","type":"visa-electron","city":"Zátor","country":"CZ"},
    {"id":149,"full_name":"Mira Endersby","email":"mendersby44@latimes.com","credit":"3583639366974214","type":"jcb","city":"Mikhaylovsk","country":"RU"},
    {"id":150,"full_name":"Zelig Peirazzi","email":"zpeirazzi45@pinterest.com","credit":"670659168148737694","type":"laser","city":"Paços","country":"PT"},
    {"id":151,"full_name":"Wat Nyles","email":"wnyles46@chron.com","credit":"5602230514908114","type":"bankcard","city":"Kristianstad","country":"SE"},
    {"id":152,"full_name":"Jennifer Lumsdaine","email":"jlumsdaine47@fc2.com","credit":"3531764297339049","type":"jcb","city":"Modot","country":"MN"},
    {"id":153,"full_name":"Nicolina Murford","email":"nmurford48@statcounter.com","credit":"4041595302688","type":"visa","city":"Lachute","country":"CA"},
    {"id":154,"full_name":"Hilda Fantin","email":"hfantin49@about.com","credit":"4917482139744084","type":"visa-electron","city":"Villasis","country":"PH"},
    {"id":155,"full_name":"Nonnah Jeremaes","email":"njeremaes4a@shutterfly.com","credit":"3568500774996232","type":"jcb","city":"Wugong","country":"CN"},
    {"id":156,"full_name":"Felice Marklew","email":"fmarklew4b@independent.co.uk","credit":"3542100297951276","type":"jcb","city":"Saint-Louis","country":"SN"},
    {"id":157,"full_name":"Linc Purchase","email":"lpurchase4c@cbslocal.com","credit":"4844196934326826","type":"visa-electron","city":"Bambari","country":"CF"},
    {"id":158,"full_name":"Loren Collins","email":"lcollins4d@smh.com.au","credit":"3559485231376353","type":"jcb","city":"Victoria","country":"CA"},
    {"id":159,"full_name":"Ede Chason","email":"echason4e@cnn.com","credit":"5602250696637687","type":"bankcard","city":"Lephalale","country":"ZA"},
    {"id":160,"full_name":"Rosalinda Stillwell","email":"rstillwell4f@auda.org.au","credit":"3536699236383150","type":"jcb","city":"Krajan Nglinggis","country":"ID"},
    {"id":161,"full_name":"Dee dee Blakebrough","email":"ddee4g@yale.edu","credit":"5100144289691838","type":"mastercard","city":"Leigao","country":"CN"},
    {"id":162,"full_name":"Asia Pala","email":"apala4h@friendfeed.com","credit":"3586838579737759","type":"jcb","city":"Jardim da Serra","country":"PT"},
    {"id":163,"full_name":"Mitchael Carding","email":"mcarding4i@hhs.gov","credit":"3585668110587954","type":"jcb","city":"Kansas City","country":"US"},
    {"id":164,"full_name":"Lauraine Boecke","email":"lboecke4j@elpais.com","credit":"3556247212641681","type":"jcb","city":"Zuocun","country":"CN"},
    {"id":165,"full_name":"Janella Rushman","email":"jrushman4k@webeden.co.uk","credit":"36575021403562","type":"diners-club-international","city":"Arapuey","country":"VE"},
    {"id":166,"full_name":"Channa Grayshon","email":"cgrayshon4l@bravesites.com","credit":"5007668124413036","type":"mastercard","city":"Masis","country":"AM"},
    {"id":167,"full_name":"Jeremie Darcey","email":"jdarcey4m@github.com","credit":"3586580103299274","type":"jcb","city":"Sakai","country":"JP"},
    {"id":168,"full_name":"Madelle McNamee","email":"mmcnamee4n@nydailynews.com","credit":"30560027138624","type":"diners-club-carte-blanche","city":"San Jose","country":"MX"},
    {"id":169,"full_name":"Cathleen Lenthall","email":"clenthall4o@statcounter.com","credit":"5610796392234500","type":"bankcard","city":"Dallas","country":"US"},
    {"id":170,"full_name":"Brenn Ranns","email":"branns4p@google.ru","credit":"3553441613429605","type":"jcb","city":"Mandepa Barat","country":"ID"},
    {"id":171,"full_name":"Kenon Beecheno","email":"kbeecheno4q@who.int","credit":"3558615540476244","type":"jcb","city":"Mariestad","country":"SE"},
    {"id":172,"full_name":"Aurie Kaveney","email":"akaveney4r@google.fr","credit":"3528370110976325","type":"jcb","city":"Wakefield","country":"NZ"},
    {"id":173,"full_name":"Allegra Jewitt","email":"ajewitt4s@woothemes.com","credit":"3529854830129520","type":"jcb","city":"Haliut","country":"CN"},
    {"id":174,"full_name":"Linea Manser","email":"lmanser4t@gmpg.org","credit":"3557227117345827","type":"jcb","city":"Beishan","country":"CN"},
    {"id":175,"full_name":"Nerti Gori","email":"ngori4u@slashdot.org","credit":"3573923922672690","type":"jcb","city":"Oulmes","country":"MA"},
    {"id":176,"full_name":"Samson Falkinder","email":"sfalkinder4v@fastcompany.com","credit":"3558304976083051","type":"jcb","city":"Boulder","country":"US"},
    {"id":177,"full_name":"Filberte Cribbins","email":"fcribbins4w@ustream.tv","credit":"3568774249900679","type":"jcb","city":"Benito Juarez","country":"MX"},
    {"id":178,"full_name":"Cirillo Smallcombe","email":"csmallcombe4x@deliciousdays.com","credit":"5002351790332120","type":"mastercard","city":"Jiefangyan","country":"CN"},
    {"id":179,"full_name":"Hally Matsell","email":"hmatsell4y@businesswire.com","credit":"3542483208335874","type":"jcb","city":"Jiaoshi","country":"CN"},
    {"id":180,"full_name":"Viola Spancock","email":"vspancock4z@fotki.com","credit":"5641826391482124","type":"switch","city":"San Francisco de Yare","country":"VE"},
    {"id":181,"full_name":"Phaedra Boame","email":"pboame50@pen.io","credit":"3550204003899776","type":"jcb","city":"Calingcuan","country":"PH"},
    {"id":182,"full_name":"Nerte Gyenes","email":"ngyenes51@wired.com","credit":"3533824798498823","type":"jcb","city":"Santa Barbara","country":"US"},
    {"id":183,"full_name":"Pavel Attiwill","email":"pattiwill52@macromedia.com","credit":"3545107052179016","type":"jcb","city":"Petro-Slavyanka","country":"RU"},
    {"id":184,"full_name":"Stanwood Haglington","email":"shaglington53@bigcartel.com","credit":"3556862834307873","type":"jcb","city":"Guantian","country":"CN"},
    {"id":185,"full_name":"Ethelred Ralston","email":"eralston54@paypal.com","credit":"3543639531052192","type":"jcb","city":"Rodas","country":"CU"},
    {"id":186,"full_name":"Lorry Blinder","email":"lblinder55@pinterest.com","credit":"201668014513528","type":"diners-club-enroute","city":"Imġarr","country":"MT"},
    {"id":187,"full_name":"Layla Eusden","email":"leusden56@si.edu","credit":"676340893911004889","type":"maestro","city":"Solna","country":"SE"},
    {"id":188,"full_name":"Yankee Dady","email":"ydady57@taobao.com","credit":"5602216073674361","type":"bankcard","city":"Ujung","country":"ID"},
    {"id":189,"full_name":"Aviva Pountain","email":"apountain58@nba.com","credit":"3572519470185167","type":"jcb","city":"Isoka","country":"ZM"},
    {"id":190,"full_name":"Barrett Howlings","email":"bhowlings59@tripadvisor.com","credit":"3532053816756902","type":"jcb","city":"Marapat","country":"ID"},
    {"id":191,"full_name":"Bjorn Barmadier","email":"bbarmadier5a@sphinn.com","credit":"5610470366132633","type":"china-unionpay","city":"Shinpokh","country":"PK"},
    {"id":192,"full_name":"Donelle Tomasini","email":"dtomasini5b@istockphoto.com","credit":"3580377360438950","type":"jcb","city":"Pécs","country":"HU"},
    {"id":193,"full_name":"Aline Ducarel","email":"aducarel5c@virginia.edu","credit":"5610773591120575687","type":"china-unionpay","city":"Ono","country":"JP"},
    {"id":194,"full_name":"Wash Glaysher","email":"wglaysher5d@plala.or.jp","credit":"3578673110752045","type":"jcb","city":"Eusébio","country":"BR"},
    {"id":195,"full_name":"Fran Booij","email":"fbooij5e@usnews.com","credit":"3551736641923327","type":"jcb","city":"Kthella e Epërme","country":"AL"},
    {"id":196,"full_name":"Lynnette Singers","email":"lsingers5f@noaa.gov","credit":"5481601156426647","type":"diners-club-us-ca","city":"Brumado","country":"BR"},
    {"id":197,"full_name":"Wilhelm Assiratti","email":"wassiratti5g@newyorker.com","credit":"3589168473195202","type":"jcb","city":"Bondokodi","country":"ID"},
    {"id":198,"full_name":"Romy Cheak","email":"rcheak5h@senate.gov","credit":"5010126108114158","type":"mastercard","city":"Steinsel","country":"LU"},
    {"id":199,"full_name":"Tedd Hogsden","email":"thogsden5i@geocities.com","credit":"5602219369474488","type":"bankcard","city":"Nova Era","country":"BR"},
    {"id":200,"full_name":"Rea Pomfrey","email":"rpomfrey5j@themeforest.net","credit":"3544434248435875","type":"jcb","city":"Sundre","country":"CA"}]
},{}],3:[function(require,module,exports){
const controller = require("./Controller/api.js")

const loadData = (path) =>
  new Promise((resolve) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) => {
      if (target.readyState == 4 && target.status == 200) {
        resolve(JSON.parse(target.response));
      }
    };
    xhttp.open("GET", path, true);
    xhttp.send();
  });

const renderTable = (data, nameTerm) => {
  const tableBody = document.getElementById("table-body");

  if (!tableBody) {
    throw new Error("No table element found");
  }
  let source = data;

  if (nameTerm) {
    source = source.filter(
                          filter  =>  filter.country === nameTerm 
                          || filter.type === nameTerm
                          || filter.city === nameTerm
                          || filter.full_name === nameTerm
                          || filter.email === nameTerm
    );
  }

  const rows = source.reduce(
    (acc, { id , full_name, email, credit, type, city, country }) =>
      acc +
      `<tr currency="table-row-${id}"><td>${id}</td><td>${full_name}</td><td>${email}</td><td>${credit}</td><td>${type}</td><td>${city}</td><td>${country}</td></tr>`,
    ``
  );``

  tableBody.innerHTML = rows;
};

controller.getAll().then(({data}) => renderTable(data));

let form = document.querySelector("#form");
  form.onsubmit = (event) => {
  event.preventDefault();
  
  const term = event.target.inputfield.value;

  controller.getAll().then(({data}) => renderTable(data, term));
  
};

form.onreset = () => {
  controller.getAll().then(({data}) => renderTable(data));
};
},{"./Controller/api.js":1}]},{},[3]);
