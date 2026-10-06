# @expo-google-fonts/clarity-city

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/clarity-city)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/clarity-city)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/clarity-city)

This package lets you use the [**Clarity City**](https://fonts.google.com/specimen/Clarity+City) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Clarity City

![Clarity City](./font-family.png)

This font family contains [18 styles](#-gallery).

- `ClarityCity_100Thin`
- `ClarityCity_200ExtraLight`
- `ClarityCity_300Light`
- `ClarityCity_400Regular`
- `ClarityCity_500Medium`
- `ClarityCity_600SemiBold`
- `ClarityCity_700Bold`
- `ClarityCity_800ExtraBold`
- `ClarityCity_900Black`
- `ClarityCity_100Thin_Italic`
- `ClarityCity_200ExtraLight_Italic`
- `ClarityCity_300Light_Italic`
- `ClarityCity_400Regular_Italic`
- `ClarityCity_500Medium_Italic`
- `ClarityCity_600SemiBold_Italic`
- `ClarityCity_700Bold_Italic`
- `ClarityCity_800ExtraBold_Italic`
- `ClarityCity_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/clarity-city expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/clarity-city/useFonts';
import { ClarityCity_100Thin } from '@expo-google-fonts/clarity-city/100Thin';
import { ClarityCity_200ExtraLight } from '@expo-google-fonts/clarity-city/200ExtraLight';
import { ClarityCity_300Light } from '@expo-google-fonts/clarity-city/300Light';
import { ClarityCity_400Regular } from '@expo-google-fonts/clarity-city/400Regular';
import { ClarityCity_500Medium } from '@expo-google-fonts/clarity-city/500Medium';
import { ClarityCity_600SemiBold } from '@expo-google-fonts/clarity-city/600SemiBold';
import { ClarityCity_700Bold } from '@expo-google-fonts/clarity-city/700Bold';
import { ClarityCity_800ExtraBold } from '@expo-google-fonts/clarity-city/800ExtraBold';
import { ClarityCity_900Black } from '@expo-google-fonts/clarity-city/900Black';
import { ClarityCity_100Thin_Italic } from '@expo-google-fonts/clarity-city/100Thin_Italic';
import { ClarityCity_200ExtraLight_Italic } from '@expo-google-fonts/clarity-city/200ExtraLight_Italic';
import { ClarityCity_300Light_Italic } from '@expo-google-fonts/clarity-city/300Light_Italic';
import { ClarityCity_400Regular_Italic } from '@expo-google-fonts/clarity-city/400Regular_Italic';
import { ClarityCity_500Medium_Italic } from '@expo-google-fonts/clarity-city/500Medium_Italic';
import { ClarityCity_600SemiBold_Italic } from '@expo-google-fonts/clarity-city/600SemiBold_Italic';
import { ClarityCity_700Bold_Italic } from '@expo-google-fonts/clarity-city/700Bold_Italic';
import { ClarityCity_800ExtraBold_Italic } from '@expo-google-fonts/clarity-city/800ExtraBold_Italic';
import { ClarityCity_900Black_Italic } from '@expo-google-fonts/clarity-city/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    ClarityCity_100Thin, 
    ClarityCity_200ExtraLight, 
    ClarityCity_300Light, 
    ClarityCity_400Regular, 
    ClarityCity_500Medium, 
    ClarityCity_600SemiBold, 
    ClarityCity_700Bold, 
    ClarityCity_800ExtraBold, 
    ClarityCity_900Black, 
    ClarityCity_100Thin_Italic, 
    ClarityCity_200ExtraLight_Italic, 
    ClarityCity_300Light_Italic, 
    ClarityCity_400Regular_Italic, 
    ClarityCity_500Medium_Italic, 
    ClarityCity_600SemiBold_Italic, 
    ClarityCity_700Bold_Italic, 
    ClarityCity_800ExtraBold_Italic, 
    ClarityCity_900Black_Italic
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
          fontFamily: "ClarityCity_100Thin"
        }}>
          Clarity City Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ClarityCity_200ExtraLight"
        }}>
          Clarity City Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ClarityCity_300Light"
        }}>
          Clarity City Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ClarityCity_400Regular"
        }}>
          Clarity City Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ClarityCity_500Medium"
        }}>
          Clarity City Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ClarityCity_600SemiBold"
        }}>
          Clarity City Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ClarityCity_700Bold"
        }}>
          Clarity City Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ClarityCity_800ExtraBold"
        }}>
          Clarity City Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ClarityCity_900Black"
        }}>
          Clarity City Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ClarityCity_100Thin_Italic"
        }}>
          Clarity City Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ClarityCity_200ExtraLight_Italic"
        }}>
          Clarity City Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ClarityCity_300Light_Italic"
        }}>
          Clarity City Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ClarityCity_400Regular_Italic"
        }}>
          Clarity City Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ClarityCity_500Medium_Italic"
        }}>
          Clarity City Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ClarityCity_600SemiBold_Italic"
        }}>
          Clarity City Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ClarityCity_700Bold_Italic"
        }}>
          Clarity City Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ClarityCity_800ExtraBold_Italic"
        }}>
          Clarity City Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ClarityCity_900Black_Italic"
        }}>
          Clarity City Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![ClarityCity_100Thin](./100Thin/ClarityCity_100Thin.ttf.png)|![ClarityCity_200ExtraLight](./200ExtraLight/ClarityCity_200ExtraLight.ttf.png)|![ClarityCity_300Light](./300Light/ClarityCity_300Light.ttf.png)||
|![ClarityCity_400Regular](./400Regular/ClarityCity_400Regular.ttf.png)|![ClarityCity_500Medium](./500Medium/ClarityCity_500Medium.ttf.png)|![ClarityCity_600SemiBold](./600SemiBold/ClarityCity_600SemiBold.ttf.png)||
|![ClarityCity_700Bold](./700Bold/ClarityCity_700Bold.ttf.png)|![ClarityCity_800ExtraBold](./800ExtraBold/ClarityCity_800ExtraBold.ttf.png)|![ClarityCity_900Black](./900Black/ClarityCity_900Black.ttf.png)||
|![ClarityCity_100Thin_Italic](./100Thin_Italic/ClarityCity_100Thin_Italic.ttf.png)|![ClarityCity_200ExtraLight_Italic](./200ExtraLight_Italic/ClarityCity_200ExtraLight_Italic.ttf.png)|![ClarityCity_300Light_Italic](./300Light_Italic/ClarityCity_300Light_Italic.ttf.png)||
|![ClarityCity_400Regular_Italic](./400Regular_Italic/ClarityCity_400Regular_Italic.ttf.png)|![ClarityCity_500Medium_Italic](./500Medium_Italic/ClarityCity_500Medium_Italic.ttf.png)|![ClarityCity_600SemiBold_Italic](./600SemiBold_Italic/ClarityCity_600SemiBold_Italic.ttf.png)||
|![ClarityCity_700Bold_Italic](./700Bold_Italic/ClarityCity_700Bold_Italic.ttf.png)|![ClarityCity_800ExtraBold_Italic](./800ExtraBold_Italic/ClarityCity_800ExtraBold_Italic.ttf.png)|![ClarityCity_900Black_Italic](./900Black_Italic/ClarityCity_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/clarity-city` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Clarity City page on Google Fonts](https://fonts.google.com/specimen/Clarity+City) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Clarity City on Google Fonts](https://fonts.google.com/specimen/Clarity+City)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/clarity-city)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/clarity-city)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
