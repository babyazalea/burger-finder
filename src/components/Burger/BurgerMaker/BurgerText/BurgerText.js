import React, { useContext } from "react";
import { BurgerContext } from "../../../../context/burger-context";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import { Container } from "react-bootstrap";
import "./BurgerText.scss";

const BurgerText = (props) => {
  const burgerContext = useContext(BurgerContext);

  let transformedIngredients = Object.keys(burgerContext.ingredients).map(
    (igKey) => {
      return [...Array(burgerContext.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    }
  );
  return (
    <Container className="burger-text">{transformedIngredients}</Container>
  );
};

export default BurgerText;

// 1. Object.keys(burgerContext.ingredients) = ["lidBun", "lettuce", "cheese", "patty", "bottomBun"]
// 2. [...Array(burgerContext.ingredients[igKey])] = [[undefined], [], [], [], [undefined]]
//    : 이 라인에서 스프레드 오퍼레이터를 제거하여 [Array(burgerContext.ingredients[igKey])], 와
//      같은 라인을 쓰게 될 경우, 결과는 [[],[],[],[],[]], 가 된다. 스프레드 오퍼레이터를 이용하여
//      undefined 값을 가진 array를 각 igKey('lidBun', 'lettuce'...) 의 value만큼 생성할 수 있다.
//      여기서 undefined 값을 가진 array가 필요한 이유는, 비어 있는 array에는 map()을 사용할 수 없기
//      때문이다.
// 3. .map((_, i) => { return <BurgerIngredient key={igKey + i} type={igKey} />;});
//     : 이 라인을 통해, 입력된 ingredients 개수 만큼 BurgerIngredient Component를 생성한다.
//       여기서 첫번째 arg를 '_'로 표시하여 사용하지 않는 이유는, 각 array를 리턴하는 첫번째 arg
//       (즉, '_'이 된)는 필요하지 않기 때문이다. 여기서 필요한 값은 두번째 arg인 index(i)이다.
//       예를 들어 ingredients의 데이터 구조가 아래와 같다고 할 때,
//              ingredients: {
//                  lidBun: 1,
//                  lettuce: 1,
//                  cheese: 2,
//                  patty: 1,
//                  bottomBun: 1,
//                }
//       2번째 라인의 결과 값은 아래와 같다.
//                [[undefined], [undefined], [undefined, undefined], [undefined], [undefined]]
//                -----------  -----------  ----------------------  ----------   ------------
//                  lidBun     lettuce             cheese             patty      bottomBun
//       이를 바탕으로 한, 3번째 라인의 결과값은 아래와 같다. 너무 길어질 것 같아서 cheese만.
//        <BurgerIngredient key=cheese0 type=cheese />
//                          -----------
//                           cheese 뒤에 붙은 번호가 index(크롬 개발자 도구에서는 당연히 보이지 않음)
//        <BurgerIngredient key=cheese1 type=cheese />
