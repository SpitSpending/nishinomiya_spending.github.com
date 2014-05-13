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
  '1': { icon: 'icons/unemployment.svg', color: '#C75746', bcolor: '#C75746' }, // 議会 *
  '101': { icon: 'icons/unemployment.svg', color: '#C75746', bcolor: '#C75746' }, // 議会 議会費 *

  '2': { icon: 'icons/financial-admin.svg', color: '#C75746', bcolor: '#7b0f12' }, // その他 *
  '201': { icon: 'icons/publicaffairst.svg', color: '#C75746', bcolor: '#7b0f12' }, // その他 総務費 *
  '202': { icon: 'icons/financial-admin.svg', color: '#C75746', bcolor: '#7b0f12' }, // その他 徴税費 *
  '203': { icon: 'icons/reserch.svg', color: '#C75746', bcolor: '#7b0f12' }, // その他 戸籍住民基本台帳費 *
  '204': { icon: 'icons/government.svg', color: '#C75746', bcolor: '#7b0f12' }, // その他 選挙費 *
  '205': { icon: 'icons/reserch.svg', color: '#C75746', bcolor: '#7b0f12' }, // その他 統計調査費 *
  '206': { icon: 'icons/reserch.svg', color: '#C75746', bcolor: '#7b0f12' }, // その他 監査委員費 *

  '3': { icon: 'icons/wheelchair.svg', color: '#C75746', bcolor: '#0ba4c4' },  // 福祉・健康・環境保全 *
  '301': { icon: 'icons/wheelchair.svg', color: '#C75746', bcolor: '#0ba4c4' },   // 福祉・健康・環境保全 社会福祉費 *
  '302': { icon: 'icons/old-age.svg', color: '#C75746', bcolor: '#0ba4c4' },   // 福祉・健康・環境保全 老人福祉費 *
  '303': { icon: 'icons/primary.svg', color: '#C75746', bcolor: '#0ba4c4' },   // 福祉・健康・環境保全 児童福祉費 *
  '304': { icon: 'icons/wheelchair.svg', color: '#C75746', bcolor: '#0ba4c4' },   // 福祉・健康・環境保全 障害福祉費 *
  '305': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#0ba4c4' },   // 福祉・健康・環境保全 生活保護費 *
  '306': { icon: 'icons/helping-others.svg', color: '#C75746', bcolor: '#0ba4c4' },   // 福祉・健康・環境保全 保健費 *
  '307': { icon: 'icons/environment-admin.svg', color: '#C75746', bcolor: '#0ba4c4' },   // 福祉・健康・環境保全 衛生費 *
  '308': { icon: 'icons/environment-admin.svg', color: '#C75746', bcolor: '#0ba4c4' },   // 福祉・健康・環境保全 清掃費 *
  '309': { icon: 'icons/hospital.svg', color: '#C75746', bcolor: '#0ba4c4' },   // 福祉・健康・環境保全 病院費 *
  '310': { icon: 'icons/water.svg', color: '#C75746', bcolor: '#0ba4c4' },   // 福祉・健康・環境保全 上水道費 *

  '4': { icon: 'icons/misc-services.svg', color: '#C75746', bcolor: '#938626' }, // 産業・仕事 *
  '401': { icon: 'icons/misc-services.svg', color: '#C75746', bcolor: '#938626.' }, // 産業・仕事 労働諸費 *
  '402': { icon: 'icons/forest.svg', color: '#C75746', bcolor: '#938626' }, // 産業・仕事 農林水産費 *
  '403': { icon: 'icons/manufactoring-construction.svg', color: '#C75746', bcolor: '#938626' }, // 産業・仕事 商工費 *

  '5': { icon: 'icons/our-streets.svg', color: '#C75746', bcolor: '#620576' }, // まちづくり *
  '501': { icon: 'icons/tree.svg', color: '#C75746', bcolor: '#620576'  }, // まちづくり 土木管理費 *
  '502': { icon: 'icons/coal.svg', color: '#C75746', bcolor: '#620576'  }, // まちづくり 道路橋梁費 *
  '503': { icon: 'icons/tree.svg', color: '#C75746', bcolor: '#620576'  }, // まちづくり 河川費 *
  '504': { icon: 'icons/construction.svg', color: '#C75746', bcolor: '#620576'  }, // まちづくり 都市計画費 *
  '505': { icon: 'icons/community.svg', color: '#C75746', bcolor: '#620576'  }, // まちづくり 公園費 *
  '506': { icon: 'icons/our-streets.svg', color: '#C75746', bcolor: '#620576'  }, // まちづくり 住宅費 *
  '507': { icon: 'icons/tree.svg', color: '#C75746', bcolor: '#620576'  }, // まちづくり 都市整備公社運営費 *

  '6': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#f26d00' }, // 安全・防災 *
  '601': { icon: 'icons/fire-brigade.svg', color: '#C75746', bcolor: '#f26d00' }, // 安全・防災 消防費 *

  '7': { icon: 'icons/primary.svg', color: '#C75746', bcolor: '#D33673' }, // 子育て *
  '701': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#D33673' }, // 子育て・教育 教育総務費 *
  '702': { icon: 'icons/primary.svg', color: '#C75746', bcolor: '#D33673' }, // 子育て・教育 小学校費 *
  '703': { icon: 'icons/secondary-lower.svg', color: '#C75746', bcolor: '#D33673' }, // 子育て・教育 中学校費 *
  '704': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#D33673' }, // 子育て・教育 特別支援学校費 *
  '705': { icon: 'icons/secondary-upper.svg', color: '#C75746', bcolor: '#D33673' }, // 子育て・教育 高等学校費 *
  '706': { icon: 'icons/pre-school.svg', color: '#C75746', bcolor: '#D33673' }, // 子育て・教育 幼稚園費 *
  '707': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#D33673' }, // 子育て・教育 社会教育費 *
  '708': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#D33673' }, // 子育て・教育 保健体育費 *

  '8': { icon: 'icons/communication.svg', color: '#C75746', bcolor: '#790586' }, // 投資的経費 *
  '801': { icon: 'icons/communication.svg', color: '#C75746', bcolor: '#790586' }, // 投資的経費 農林水産施設災害復旧費 *
  '802': { icon: 'icons/coal.svg', color: '#C75746', bcolor: '#790586' }, // 投資的経費 公共土木施設災害復旧費 *

  '9': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#0AB971' },  // 公債 *
  '901': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#0AB971' },  // 公債 公債費 *

  '10': { icon: 'icons/admin.svg', color: '#C75746', bcolor: '#790586' }, // その他の経費 *
  '1001': { icon: 'icons/pig.svg', color: '#C75746', bcolor: '#790586' } // その他の経費 予備費 *
};


