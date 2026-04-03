# @expo-google-fonts/saira-stencil

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/saira-stencil)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/saira-stencil)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/saira-stencil)

This package lets you use the [**Saira Stencil**](https://fonts.google.com/specimen/Saira+Stencil) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Saira Stencil

![Saira Stencil](./font-family.png)

This font family contains [18 styles](#-gallery).

- `SairaStencil_100Thin`
- `SairaStencil_200ExtraLight`
- `SairaStencil_300Light`
- `SairaStencil_400Regular`
- `SairaStencil_500Medium`
- `SairaStencil_600SemiBold`
- `SairaStencil_700Bold`
- `SairaStencil_800ExtraBold`
- `SairaStencil_900Black`
- `SairaStencil_100Thin_Italic`
- `SairaStencil_200ExtraLight_Italic`
- `SairaStencil_300Light_Italic`
- `SairaStencil_400Regular_Italic`
- `SairaStencil_500Medium_Italic`
- `SairaStencil_600SemiBold_Italic`
- `SairaStencil_700Bold_Italic`
- `SairaStencil_800ExtraBold_Italic`
- `SairaStencil_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/saira-stencil expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/saira-stencil/useFonts';
import { SairaStencil_100Thin } from '@expo-google-fonts/saira-stencil/100Thin';
import { SairaStencil_200ExtraLight } from '@expo-google-fonts/saira-stencil/200ExtraLight';
import { SairaStencil_300Light } from '@expo-google-fonts/saira-stencil/300Light';
import { SairaStencil_400Regular } from '@expo-google-fonts/saira-stencil/400Regular';
import { SairaStencil_500Medium } from '@expo-google-fonts/saira-stencil/500Medium';
import { SairaStencil_600SemiBold } from '@expo-google-fonts/saira-stencil/600SemiBold';
import { SairaStencil_700Bold } from '@expo-google-fonts/saira-stencil/700Bold';
import { SairaStencil_800ExtraBold } from '@expo-google-fonts/saira-stencil/800ExtraBold';
import { SairaStencil_900Black } from '@expo-google-fonts/saira-stencil/900Black';
import { SairaStencil_100Thin_Italic } from '@expo-google-fonts/saira-stencil/100Thin_Italic';
import { SairaStencil_200ExtraLight_Italic } from '@expo-google-fonts/saira-stencil/200ExtraLight_Italic';
import { SairaStencil_300Light_Italic } from '@expo-google-fonts/saira-stencil/300Light_Italic';
import { SairaStencil_400Regular_Italic } from '@expo-google-fonts/saira-stencil/400Regular_Italic';
import { SairaStencil_500Medium_Italic } from '@expo-google-fonts/saira-stencil/500Medium_Italic';
import { SairaStencil_600SemiBold_Italic } from '@expo-google-fonts/saira-stencil/600SemiBold_Italic';
import { SairaStencil_700Bold_Italic } from '@expo-google-fonts/saira-stencil/700Bold_Italic';
import { SairaStencil_800ExtraBold_Italic } from '@expo-google-fonts/saira-stencil/800ExtraBold_Italic';
import { SairaStencil_900Black_Italic } from '@expo-google-fonts/saira-stencil/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    SairaStencil_100Thin, 
    SairaStencil_200ExtraLight, 
    SairaStencil_300Light, 
    SairaStencil_400Regular, 
    SairaStencil_500Medium, 
    SairaStencil_600SemiBold, 
    SairaStencil_700Bold, 
    SairaStencil_800ExtraBold, 
    SairaStencil_900Black, 
    SairaStencil_100Thin_Italic, 
    SairaStencil_200ExtraLight_Italic, 
    SairaStencil_300Light_Italic, 
    SairaStencil_400Regular_Italic, 
    SairaStencil_500Medium_Italic, 
    SairaStencil_600SemiBold_Italic, 
    SairaStencil_700Bold_Italic, 
    SairaStencil_800ExtraBold_Italic, 
    SairaStencil_900Black_Italic
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
          fontFamily: "SairaStencil_100Thin"
        }}>
          Saira Stencil Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaStencil_200ExtraLight"
        }}>
          Saira Stencil Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaStencil_300Light"
        }}>
          Saira Stencil Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaStencil_400Regular"
        }}>
          Saira Stencil Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaStencil_500Medium"
        }}>
          Saira Stencil Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaStencil_600SemiBold"
        }}>
          Saira Stencil Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaStencil_700Bold"
        }}>
          Saira Stencil Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaStencil_800ExtraBold"
        }}>
          Saira Stencil Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaStencil_900Black"
        }}>
          Saira Stencil Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaStencil_100Thin_Italic"
        }}>
          Saira Stencil Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaStencil_200ExtraLight_Italic"
        }}>
          Saira Stencil Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaStencil_300Light_Italic"
        }}>
          Saira Stencil Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaStencil_400Regular_Italic"
        }}>
          Saira Stencil Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaStencil_500Medium_Italic"
        }}>
          Saira Stencil Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaStencil_600SemiBold_Italic"
        }}>
          Saira Stencil Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaStencil_700Bold_Italic"
        }}>
          Saira Stencil Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaStencil_800ExtraBold_Italic"
        }}>
          Saira Stencil Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaStencil_900Black_Italic"
        }}>
          Saira Stencil Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![SairaStencil_100Thin](./100Thin/SairaStencil_100Thin.ttf.png)|![SairaStencil_200ExtraLight](./200ExtraLight/SairaStencil_200ExtraLight.ttf.png)|![SairaStencil_300Light](./300Light/SairaStencil_300Light.ttf.png)||
|![SairaStencil_400Regular](./400Regular/SairaStencil_400Regular.ttf.png)|![SairaStencil_500Medium](./500Medium/SairaStencil_500Medium.ttf.png)|![SairaStencil_600SemiBold](./600SemiBold/SairaStencil_600SemiBold.ttf.png)||
|![SairaStencil_700Bold](./700Bold/SairaStencil_700Bold.ttf.png)|![SairaStencil_800ExtraBold](./800ExtraBold/SairaStencil_800ExtraBold.ttf.png)|![SairaStencil_900Black](./900Black/SairaStencil_900Black.ttf.png)||
|![SairaStencil_100Thin_Italic](./100Thin_Italic/SairaStencil_100Thin_Italic.ttf.png)|![SairaStencil_200ExtraLight_Italic](./200ExtraLight_Italic/SairaStencil_200ExtraLight_Italic.ttf.png)|![SairaStencil_300Light_Italic](./300Light_Italic/SairaStencil_300Light_Italic.ttf.png)||
|![SairaStencil_400Regular_Italic](./400Regular_Italic/SairaStencil_400Regular_Italic.ttf.png)|![SairaStencil_500Medium_Italic](./500Medium_Italic/SairaStencil_500Medium_Italic.ttf.png)|![SairaStencil_600SemiBold_Italic](./600SemiBold_Italic/SairaStencil_600SemiBold_Italic.ttf.png)||
|![SairaStencil_700Bold_Italic](./700Bold_Italic/SairaStencil_700Bold_Italic.ttf.png)|![SairaStencil_800ExtraBold_Italic](./800ExtraBold_Italic/SairaStencil_800ExtraBold_Italic.ttf.png)|![SairaStencil_900Black_Italic](./900Black_Italic/SairaStencil_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/saira-stencil` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Saira Stencil page on Google Fonts](https://fonts.google.com/specimen/Saira+Stencil) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Saira Stencil on Google Fonts](https://fonts.google.com/specimen/Saira+Stencil)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/saira-stencil)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/saira-stencil)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
