# @expo-google-fonts/hubot-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/hubot-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/hubot-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/hubot-sans)

This package lets you use the [**Hubot Sans**](https://fonts.google.com/specimen/Hubot+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Hubot Sans

![Hubot Sans](./font-family.png)

This font family contains [16 styles](#-gallery).

- `HubotSans_200ExtraLight`
- `HubotSans_300Light`
- `HubotSans_400Regular`
- `HubotSans_500Medium`
- `HubotSans_600SemiBold`
- `HubotSans_700Bold`
- `HubotSans_800ExtraBold`
- `HubotSans_900Black`
- `HubotSans_200ExtraLight_Italic`
- `HubotSans_300Light_Italic`
- `HubotSans_400Regular_Italic`
- `HubotSans_500Medium_Italic`
- `HubotSans_600SemiBold_Italic`
- `HubotSans_700Bold_Italic`
- `HubotSans_800ExtraBold_Italic`
- `HubotSans_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/hubot-sans expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/hubot-sans/useFonts';
import { HubotSans_200ExtraLight } from '@expo-google-fonts/hubot-sans/200ExtraLight';
import { HubotSans_300Light } from '@expo-google-fonts/hubot-sans/300Light';
import { HubotSans_400Regular } from '@expo-google-fonts/hubot-sans/400Regular';
import { HubotSans_500Medium } from '@expo-google-fonts/hubot-sans/500Medium';
import { HubotSans_600SemiBold } from '@expo-google-fonts/hubot-sans/600SemiBold';
import { HubotSans_700Bold } from '@expo-google-fonts/hubot-sans/700Bold';
import { HubotSans_800ExtraBold } from '@expo-google-fonts/hubot-sans/800ExtraBold';
import { HubotSans_900Black } from '@expo-google-fonts/hubot-sans/900Black';
import { HubotSans_200ExtraLight_Italic } from '@expo-google-fonts/hubot-sans/200ExtraLight_Italic';
import { HubotSans_300Light_Italic } from '@expo-google-fonts/hubot-sans/300Light_Italic';
import { HubotSans_400Regular_Italic } from '@expo-google-fonts/hubot-sans/400Regular_Italic';
import { HubotSans_500Medium_Italic } from '@expo-google-fonts/hubot-sans/500Medium_Italic';
import { HubotSans_600SemiBold_Italic } from '@expo-google-fonts/hubot-sans/600SemiBold_Italic';
import { HubotSans_700Bold_Italic } from '@expo-google-fonts/hubot-sans/700Bold_Italic';
import { HubotSans_800ExtraBold_Italic } from '@expo-google-fonts/hubot-sans/800ExtraBold_Italic';
import { HubotSans_900Black_Italic } from '@expo-google-fonts/hubot-sans/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    HubotSans_200ExtraLight, 
    HubotSans_300Light, 
    HubotSans_400Regular, 
    HubotSans_500Medium, 
    HubotSans_600SemiBold, 
    HubotSans_700Bold, 
    HubotSans_800ExtraBold, 
    HubotSans_900Black, 
    HubotSans_200ExtraLight_Italic, 
    HubotSans_300Light_Italic, 
    HubotSans_400Regular_Italic, 
    HubotSans_500Medium_Italic, 
    HubotSans_600SemiBold_Italic, 
    HubotSans_700Bold_Italic, 
    HubotSans_800ExtraBold_Italic, 
    HubotSans_900Black_Italic
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HubotSans_200ExtraLight"
        }}>
          Hubot Sans Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HubotSans_300Light"
        }}>
          Hubot Sans Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HubotSans_400Regular"
        }}>
          Hubot Sans Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HubotSans_500Medium"
        }}>
          Hubot Sans Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HubotSans_600SemiBold"
        }}>
          Hubot Sans Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HubotSans_700Bold"
        }}>
          Hubot Sans Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HubotSans_800ExtraBold"
        }}>
          Hubot Sans Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HubotSans_900Black"
        }}>
          Hubot Sans Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HubotSans_200ExtraLight_Italic"
        }}>
          Hubot Sans Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HubotSans_300Light_Italic"
        }}>
          Hubot Sans Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HubotSans_400Regular_Italic"
        }}>
          Hubot Sans Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HubotSans_500Medium_Italic"
        }}>
          Hubot Sans Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HubotSans_600SemiBold_Italic"
        }}>
          Hubot Sans Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HubotSans_700Bold_Italic"
        }}>
          Hubot Sans Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HubotSans_800ExtraBold_Italic"
        }}>
          Hubot Sans Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HubotSans_900Black_Italic"
        }}>
          Hubot Sans Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![HubotSans_200ExtraLight](./200ExtraLight/HubotSans_200ExtraLight.ttf.png)|![HubotSans_300Light](./300Light/HubotSans_300Light.ttf.png)|![HubotSans_400Regular](./400Regular/HubotSans_400Regular.ttf.png)||
|![HubotSans_500Medium](./500Medium/HubotSans_500Medium.ttf.png)|![HubotSans_600SemiBold](./600SemiBold/HubotSans_600SemiBold.ttf.png)|![HubotSans_700Bold](./700Bold/HubotSans_700Bold.ttf.png)||
|![HubotSans_800ExtraBold](./800ExtraBold/HubotSans_800ExtraBold.ttf.png)|![HubotSans_900Black](./900Black/HubotSans_900Black.ttf.png)|![HubotSans_200ExtraLight_Italic](./200ExtraLight_Italic/HubotSans_200ExtraLight_Italic.ttf.png)||
|![HubotSans_300Light_Italic](./300Light_Italic/HubotSans_300Light_Italic.ttf.png)|![HubotSans_400Regular_Italic](./400Regular_Italic/HubotSans_400Regular_Italic.ttf.png)|![HubotSans_500Medium_Italic](./500Medium_Italic/HubotSans_500Medium_Italic.ttf.png)||
|![HubotSans_600SemiBold_Italic](./600SemiBold_Italic/HubotSans_600SemiBold_Italic.ttf.png)|![HubotSans_700Bold_Italic](./700Bold_Italic/HubotSans_700Bold_Italic.ttf.png)|![HubotSans_800ExtraBold_Italic](./800ExtraBold_Italic/HubotSans_800ExtraBold_Italic.ttf.png)||
|![HubotSans_900Black_Italic](./900Black_Italic/HubotSans_900Black_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/hubot-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Hubot Sans page on Google Fonts](https://fonts.google.com/specimen/Hubot+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Hubot Sans on Google Fonts](https://fonts.google.com/specimen/Hubot+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/hubot-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/hubot-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
