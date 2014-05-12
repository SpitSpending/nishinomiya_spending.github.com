/*
 * Icons for COFOG taxonomy
 *
 */
var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; // 住民税基礎控除
Taxes.huyoKoujo = 330000; // 一人分の扶養控除
Taxes.taxRate = 0.06; // 住民税率

var OpenSpending = OpenSpending || {};

OpenSpending.identifier = 'nishinomiya_2014_data';
OpenSpending.year = '2014';

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {

  /* yokohama cofog */
  '1': { icon: 'icons/wheelchair.svg', color: '#C75746', bcolor: '#0ba4c4' },  // 福祉・健康・環境保全 *
  '101': { icon: 'icons/wheelchair.svg', color: '#C75746', bcolor: '#0ba4c4' },   // 福祉・健康・環境保全 民生費 *
  '102': { icon: 'icons/environment-admin.svg', color: '#C75746', bcolor: '#0ba4c4' },   // 福祉・健康・環境保全 衛生費 *

  '2': { icon: 'icons/financial-admin.svg', color: '#C75746', bcolor: '#0AB971' },  // 公債 *
  '201': { icon: 'icons/financial-admin.svg', color: '#C75746', bcolor: '#0AB971' },  // 公債 公債費 *

  '3': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#5f4f0e' },  // その他 *
  '301': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#5f4f0e' }, // その他 総務費 *
  '302': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#5f4f0e' }, // その他 諸支出金 *
  '303': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#5f4f0e' }, // その他 予備費 *

  '4': { icon: 'icons/primary.svg', color: '#C75746', bcolor: '#D33673' }, // 子育て *
  '401': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#D33673' }, // 子育て・教育 教育費 *

  '5': { icon: 'icons/our-streets.svg', color: '#C75746', bcolor: '#620576' }, // まちづくり *
  '501': { icon: 'icons/tree.svg', color: '#C75746', bcolor: '#620576'  }, // まちづくり 土木費 *

  '6': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#f26d00' }, // 安全・防災 *
  '601': { icon: 'icons/fire-brigade.svg', color: '#C75746', bcolor: '#f26d00' }, // 安全・防災 消防費 *
  '602': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#f26d00' }, // 安全・防災 災害復旧費 *

  '7': { icon: 'icons/misc-services.svg', color: '#C75746', bcolor: '#938626' }, // 産業・仕事 *
  '701': { icon: 'icons/misc-services.svg', color: '#C75746', bcolor: '#938626' }, // 産業・仕事 商工費 *
  '702': { icon: 'icons/misc-services.svg', color: '#C75746', bcolor: '#938626' }, // 産業・仕事 労働費 *
  '703': { icon: 'icons/forest.svg', color: '#C75746', bcolor: '#938626' }, // 産業・仕事 農林水産業費 *

  '8': { icon: 'icons/unemployment.svg', color: '#C75746', bcolor: '#C75746' }, // 議会 *
  '801': { icon: 'icons/unemployment.svg', color: '#C75746', bcolor: '#C75746' }, // 議会 議会費 *

  '9': { icon: 'icons/economic-aid.svg', color: '#C75746', bcolor: '#3dcd85' }, // 義務的経費 *
  '901': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#3dcd85' }, // 義務的経費 人件費 *
  '902': { icon: 'icons/petrol.svg', color: '#C75746', bcolor: '#3dcd85' }, // 義務的経費 物件費 *
  '903': { icon: 'icons/helping-others.svg', color: '#C75746', bcolor: '#3dcd85' }, // 義務的経費 扶助費 *
  '904': { icon: 'icons/reserch.svg', color: '#C75746', bcolor: '#3dcd85' }, // 義務的経費 その他 *

  '10': { icon: 'icons/communication.svg', color: '#C75746', bcolor: '#790586' }, // 投資的経費 *
  '1001': { icon: 'icons/communication.svg', color: '#C75746', bcolor: '#790586' }, // 投資的経費 普通建設事業費 *
  '1002': { icon: 'icons/coal.svg', color: '#C75746', bcolor: '#790586' }, // 投資的経費 災害復旧事業費 *

  '11': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#7b0f12' }, // その他の経費 *
  '1101': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#7b0f12' }, // その他の経費 貸付金等 *
  '1102': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#7b0f12' }, // その他の経費 公債費 *
  '1103': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#7b0f12' }, // その他の経費 他会計繰出金 *
  '1104': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#7b0f12' } // その他の経費 予備費 *
};


