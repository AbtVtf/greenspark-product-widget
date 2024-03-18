import { useState } from "react";
import Checkbox from "../CheckboxComponent";
import { CustomText } from "../TextComponent";
import {
  CheckboxContainer,
  ColorBoxContainer,
  Logo,
  TitleWrapper,
  WidgetContainer,
  WidgetContent,
  WidgetHeader,
  WidgetRow,
} from "./styles";
import { Toggle } from "../ToggleComponent";
import logo from "../../assets/logo.svg";
import logoGreen from "../../assets/logo-green.svg";
import { useDispatch } from "react-redux";
import {
  setActiveWidgetId,
  updateLinkToProfile,
  updateWidget,
  updateWidgetColor,
} from "../../slice/widgetsSlice";
import ColorBox from "../ColorBox";

interface WidgetProps {
  id: number;
  action: "collects" | "plants" | "offsets";
  type: "carbon" | "plastic bottles" | "trees";
  amount: number;
  active: boolean;
  linked: boolean;
  selectedColor: string;
}

interface Colors {
  [key: string]: string;
}

const colors: Colors = {
  blue: "#2E3A8C",
  green: "#3B755F",
  beige: "#F2EBDB",
  white: "#FFFFFF",
  black: "#212121",
};

const Widget = ({
  id,
  action,
  type,
  amount,
  active,
  linked,
  selectedColor,
}: WidgetProps) => {
  const dispatch = useDispatch();
  const [linkedBox, setLinkedBox] = useState(linked);

  const updateColor = (color: string) => {
    dispatch(updateWidgetColor({ id, color }));
  };

  const updateActive = (active: boolean) => {
    dispatch(setActiveWidgetId(id));
    dispatch(
      updateWidget({ id, action, type, amount, active, linked, selectedColor })
    );
  };

  const toggleLinked = () => {
    setLinkedBox(!linked);
    dispatch(updateLinkToProfile({ id, isLinked: !linkedBox }));
  };

  return (
    <WidgetContainer>
      <WidgetHeader type={type}>
        <Logo src={type === "carbon" ? logoGreen : logo} alt="logo" />
        <TitleWrapper>
          <CustomText
            size={12.41}
            weight="regular"
            color={type === "carbon" ? "#3B755F" : "#F9F9F9"}
            text={`This product ${action}`}
          />
          <CustomText
            size={17.86}
            weight="bold"
            color={type === "carbon" ? "#3B755F" : "#F9F9F9"}
            text={
              type === "carbon"
                ? `${amount}kgs of ${type}`
                : `${amount} ${type}`
            }
          />
        </TitleWrapper>
      </WidgetHeader>
      <WidgetContent>
        <WidgetRow>
          <CustomText
            size={14}
            weight="regular"
            color="#3B755F"
            text="Link to Public Profile"
            tooltipText="This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it."
          />
          <CheckboxContainer>
            <Checkbox checked={linkedBox} onChange={toggleLinked} />
          </CheckboxContainer>
        </WidgetRow>
        <WidgetRow>
          <CustomText
            size={14}
            weight="regular"
            color="#3B755F"
            text="Badge colour"
          />
          <ColorBoxContainer>
            {Object.keys(colors).map((color) => (
              <ColorBox
                key={color}
                color={colors[color as keyof typeof colors]}
                selected={selectedColor === color}
                onClick={() => updateColor(color)}
              />
            ))}
          </ColorBoxContainer>
        </WidgetRow>
        <WidgetRow>
          <CustomText
            size={14}
            weight="regular"
            color="#3B755F"
            text="Activate badge"
          />

          <Toggle selected={active} onToggle={() => updateActive(!active)} />
        </WidgetRow>
      </WidgetContent>
    </WidgetContainer>
  );
};

export default Widget;
