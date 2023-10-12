import { useEffect, useState } from "react";
import { useRules } from "../../zustand/password-challenge";

import PasswordField from "./PasswordField";
import Notification from "./Notification";
import { RULES } from "../../constants/rules";

export default function FrameGamePasswordChallenge(): JSX.Element {
  const [passwordStrong, setPasswordStrong] = useState(false);

  const { checkedList, activatedItems, addCheckedlist, removeCheckedList } =
    useRules();

  useEffect(() => {
    const verifyRules = (password: string) => {
      //Condition 1
      if (password.length >= 8) {
        addCheckedlist("1");
      } else {
        removeCheckedList("1");
      }

      // Condition 2
      if (/\d/.test(password)) {
        addCheckedlist("2");
      } else {
        removeCheckedList("2");
      }

      //Condition 3
      const numbers = password.match(/\d/g);
      const sum = numbers?.reduce((total, digit) => total + Number(digit), 0);
      if (sum && sum >= 27) {
        addCheckedlist("3");
      } else {
        removeCheckedList("3");
      }

      //Condition 4
      const weekDay = ["monday", "tuesday", "wednesday", "thursday", "friday"];
      for (const day of weekDay) {
        const regex = new RegExp(`${day.split("").join(".*")}`);

        if (regex.test(password.toLowerCase())) {
          addCheckedlist("4");
          break;
        } else {
          removeCheckedList("4");
        }
      }

      //Condition 5
      if (password.includes("🥚")) {
        addCheckedlist("5");
      } else {
        removeCheckedList("5");
      }

      //Condition 6
      if (password.includes("Beth")) {
        addCheckedlist("6");
      } else {
        removeCheckedList("6");
      }

      //Condition 7
      if (password.includes("462")) {
        addCheckedlist("7");
      } else {
        removeCheckedList("7");
      }

      //Condition 8
      if (password.includes("🔥🥚🔥")) {
        addCheckedlist("8");
      } else {
        removeCheckedList("8");
      }

      //Condition 9
      if (password.includes("10-06-1856")) {
        addCheckedlist("9");
      } else {
        removeCheckedList("9");
      }

      //Condition 10
      if (password.includes("xanthophobia")) {
        addCheckedlist("10");
      } else {
        removeCheckedList("10");
      }

      //Condition 11
      if (password.includes("@")) {
        addCheckedlist("11");
      } else {
        removeCheckedList("11");
      }

      //Condition 12
      if (password.includes("🐣")) {
        addCheckedlist("12");
        setPasswordStrong(true);
      } else {
        removeCheckedList("12");
        setPasswordStrong(false);
      }
    };

    const handleInput = (event: Event) => {
      const inputElement = event.target as HTMLInputElement;
      const value = inputElement.value;
      verifyRules(value);
    };

    const inputPassword = document.getElementById("psw");
    inputPassword?.addEventListener("input", handleInput);

    return () => inputPassword?.removeEventListener("input", handleInput);
  }, [checkedList]);

  return (
    <div className="flex flex-col items-center justify-center mb-10">
      <PasswordField />
      <Notification
        text="You must enter a strong password"
        isActive={true}
        check={passwordStrong}
        id="0"
      />
      {RULES.map((item, index) => (
        <Notification
          text={item}
          isActive={activatedItems.includes(String(index))}
          check={checkedList.includes(String(index + 1))}
          id={String(index + 1)}
          key={index}
        />
      ))}

      <p className="my-5 underline font-semibold relative bottom-0">
        Created By Gonzalo Villavicencio
      </p>
    </div>
  );
}
