// 제어문 : 조건문, 선택문, 반복문
// 조건문 : if() ~ else if() ~ else
// 선택문 : seitch ~ case ~ break ~ default
// 반복문 : while, do while, for

// #1. 조건문 : true 또는 flase라는 조건에 의해서 어떤 결과를 도출하는 제어 담당
var age = 12;
if (age >= 13) {
  document.write(`가입 연령 대상입니다. <br/>`);
} else {
  document.write(`가입 연령 대상이 아닙니다. <br/>`);
}

// 현재 계절에 따른 문구 보여주기
var curMonth = 9;

if (curMonth >= 1 && curMonth <= 12) {
  if (curMonth >= 3 && curMonth <= 5) {
    document.write(`따뜻한 봄입니다. <br/>`);
  } else if (curMonth >= 6 && curMonth <= 8) {
    document.write(`뜨거운 여름입니다. <br/>`);
  } else if (curMonth >= 9 && curMonth <= 11) {
    document.write(`시원한 가을입니다. <br/>`);
  } else {
    document.write(`추운 겨울입니다. <br/>`);
  } // 2차 조건문
} else {
  document.write(`유효한 값이 아닙니다. <br/>`);
} // 1차 조건문

// 조건문으로 구매자의 등급에 따른 할인쿠폰 발송

/*
VIP(100,000원 이상 구매 고객) => 30% 할인 쿠폰 발송
GOLD(60,000원 이상 구매 고객) => 20% 할인 쿠폰 발송
SILVER(10,000원 이상 구매 고객) => 10% 할인 쿠폰 발송
BRONZE(10,000원 미만 구매 고객) => 5% 할인 쿠폰 발송
*/

var buyPrice = 75000;
if (buyPrice >= 100000) {
  document.write(
    `당신은 VIP등급입니다. 마이페이지에서 30% 할인 쿠폰을 확인 바랍니다. <br />`
  );
} else if (buyPrice >= 60000) {
  document.write(
    `당신은 GOLD등급입니다. 마이페이지에서 20% 할인 쿠폰을 확인 바랍니다. <br />`
  );
} else if (buyPrice >= 10000) {
  document.write(
    `당신은 SILVER등급입니다. 마이페이지에서 10% 할인 쿠폰을 확인 바랍니다. <br />`
  );
} else if (buyPrice < 10000) {
  document.write(
    `당신은 BORNZE등급입니다. 마이페이지에서 5% 할인 쿠폰을 확인 바랍니다. <br />`
  );
}

//ex) 게임 캐릭터 레벨 제한에 따른 무기 장착
var myHeroLevel = 8;
var specialCloth = "몽땅 막는 갑옷";

if (myHeroLevel > 10) {
  document.write(`당신은 ${specialCloth}을(를) 착용 가능합니다. <br/>`);
} else {
  document.write(`당신은 ${specialCloth}을(를) 착용 불가능합니다. <br/>`);
}

// 디바이스 사이즈를 기준으로 어떤 디바이스에서 서비스를 보고있는지 확인

// 가로 사이즈가 1200px 이상일 경우 - pc로 가정
// 가로 사이즈가 768px 이상일 경우 - 테블릿으로 가정
// 가로 사이즈가 768px 미만일 경우 - 핸드폰으로 가정

var deviceWidth = 375;
if (deviceWidth >= 1200) {
  console.log(`디바이스 - pc <br/>`);
} else if (deviceWidth >= 768) {
  console.log(`디바이스 - 테블릿 <br/>`);
} else {
  console.log(`디바이스 - 모바일 <br/>`);
}

// 선택문 - 정확하게 일치 여부에 따라서 결과를 다르게 도출
var subwayNum = "2";
switch (subwayNum) {
  case "1":
    document.write(`군청색 1호선 입니다. <br/>`);
    break;
  case "2":
    document.write(`녹색 2호선 입니다. <br/>`);
    break;
  case "3":
    document.write(`주황색 3호선 입니다. <br/>`);
    break;
  case "4":
    document.write(`파란색 4호선 입니다. <br/>`);
    break;
  default:
    document.write(`유효한 값이 아닙니다. <br/>`);
}
