# @expo-google-fonts/zalando-sans-semiexpanded

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/zalando-sans-semiexpanded)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/zalando-sans-semiexpanded)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/zalando-sans-semiexpanded)

This package lets you use the [**Zalando Sans SemiExpanded**](https://fonts.google.com/specimen/Zalando+Sans+SemiExpanded) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Zalando Sans SemiExpanded

![Zalando Sans SemiExpanded](./font-family.png)

This font family contains [16 styles](#-gallery).

- `ZalandoSansSemiExpanded_200ExtraLight`
- `ZalandoSansSemiExpanded_300Light`
- `ZalandoSansSemiExpanded_400Regular`
- `ZalandoSansSemiExpanded_500Medium`
- `ZalandoSansSemiExpanded_600SemiBold`
- `ZalandoSansSemiExpanded_700Bold`
- `ZalandoSansSemiExpanded_800ExtraBold`
- `ZalandoSansSemiExpanded_900Black`
- `ZalandoSansSemiExpanded_200ExtraLight_Italic`
- `ZalandoSansSemiExpanded_300Light_Italic`
- `ZalandoSansSemiExpanded_400Regular_Italic`
- `ZalandoSansSemiExpanded_500Medium_Italic`
- `ZalandoSansSemiExpanded_600SemiBold_Italic`
- `ZalandoSansSemiExpanded_700Bold_Italic`
- `ZalandoSansSemiExpanded_800ExtraBold_Italic`
- `ZalandoSansSemiExpanded_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/zalando-sans-semiexpanded expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/zalando-sans-semiexpanded/useFonts';
import { ZalandoSansSemiExpanded_200ExtraLight } from '@expo-google-fonts/zalando-sans-semiexpanded/200ExtraLight';
import { ZalandoSansSemiExpanded_300Light } from '@expo-google-fonts/zalando-sans-semiexpanded/300Light';
import { ZalandoSansSemiExpanded_400Regular } from '@expo-google-fonts/zalando-sans-semiexpanded/400Regular';
import { ZalandoSansSemiExpanded_500Medium } from '@expo-google-fonts/zalando-sans-semiexpanded/500Medium';
import { ZalandoSansSemiExpanded_600SemiBold } from '@expo-google-fonts/zalando-sans-semiexpanded/600SemiBold';
import { ZalandoSansSemiExpanded_700Bold } from '@expo-google-fonts/zalando-sans-semiexpanded/700Bold';
import { ZalandoSansSemiExpanded_800ExtraBold } from '@expo-google-fonts/zalando-sans-semiexpanded/800ExtraBold';
import { ZalandoSansSemiExpanded_900Black } from '@expo-google-fonts/zalando-sans-semiexpanded/900Black';
import { ZalandoSansSemiExpanded_200ExtraLight_Italic } from '@expo-google-fonts/zalando-sans-semiexpanded/200ExtraLight_Italic';
import { ZalandoSansSemiExpanded_300Light_Italic } from '@expo-google-fonts/zalando-sans-semiexpanded/300Light_Italic';
import { ZalandoSansSemiExpanded_400Regular_Italic } from '@expo-google-fonts/zalando-sans-semiexpanded/400Regular_Italic';
import { ZalandoSansSemiExpanded_500Medium_Italic } from '@expo-google-fonts/zalando-sans-semiexpanded/500Medium_Italic';
import { ZalandoSansSemiExpanded_600SemiBold_Italic } from '@expo-google-fonts/zalando-sans-semiexpanded/600SemiBold_Italic';
import { ZalandoSansSemiExpanded_700Bold_Italic } from '@expo-google-fonts/zalando-sans-semiexpanded/700Bold_Italic';
import { ZalandoSansSemiExpanded_800ExtraBold_Italic } from '@expo-google-fonts/zalando-sans-semiexpanded/800ExtraBold_Italic';
import { ZalandoSansSemiExpanded_900Black_Italic } from '@expo-google-fonts/zalando-sans-semiexpanded/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    ZalandoSansSemiExpanded_200ExtraLight, 
    ZalandoSansSemiExpanded_300Light, 
    ZalandoSansSemiExpanded_400Regular, 
    ZalandoSansSemiExpanded_500Medium, 
    ZalandoSansSemiExpanded_600SemiBold, 
    ZalandoSansSemiExpanded_700Bold, 
    ZalandoSansSemiExpanded_800ExtraBold, 
    ZalandoSansSemiExpanded_900Black, 
    ZalandoSansSemiExpanded_200ExtraLight_Italic, 
    ZalandoSansSemiExpanded_300Light_Italic, 
    ZalandoSansSemiExpanded_400Regular_Italic, 
    ZalandoSansSemiExpanded_500Medium_Italic, 
    ZalandoSansSemiExpanded_600SemiBold_Italic, 
    ZalandoSansSemiExpanded_700Bold_Italic, 
    ZalandoSansSemiExpanded_800ExtraBold_Italic, 
    ZalandoSansSemiExpanded_900Black_Italic
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
          fontFamily: "ZalandoSansSemiExpanded_200ExtraLight"
        }}>
          Zalando Sans SemiExpanded Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSansSemiExpanded_300Light"
        }}>
          Zalando Sans SemiExpanded Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSansSemiExpanded_400Regular"
        }}>
          Zalando Sans SemiExpanded Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSansSemiExpanded_500Medium"
        }}>
          Zalando Sans SemiExpanded Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSansSemiExpanded_600SemiBold"
        }}>
          Zalando Sans SemiExpanded Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSansSemiExpanded_700Bold"
        }}>
          Zalando Sans SemiExpanded Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSansSemiExpanded_800ExtraBold"
        }}>
          Zalando Sans SemiExpanded Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSansSemiExpanded_900Black"
        }}>
          Zalando Sans SemiExpanded Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSansSemiExpanded_200ExtraLight_Italic"
        }}>
          Zalando Sans SemiExpanded Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSansSemiExpanded_300Light_Italic"
        }}>
          Zalando Sans SemiExpanded Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSansSemiExpanded_400Regular_Italic"
        }}>
          Zalando Sans SemiExpanded Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSansSemiExpanded_500Medium_Italic"
        }}>
          Zalando Sans SemiExpanded Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSansSemiExpanded_600SemiBold_Italic"
        }}>
          Zalando Sans SemiExpanded Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSansSemiExpanded_700Bold_Italic"
        }}>
          Zalando Sans SemiExpanded Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSansSemiExpanded_800ExtraBold_Italic"
        }}>
          Zalando Sans SemiExpanded Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZalandoSansSemiExpanded_900Black_Italic"
        }}>
          Zalando Sans SemiExpanded Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![ZalandoSansSemiExpanded_200ExtraLight](./200ExtraLight/ZalandoSansSemiExpanded_200ExtraLight.ttf.png)|![ZalandoSansSemiExpanded_300Light](./300Light/ZalandoSansSemiExpanded_300Light.ttf.png)|![ZalandoSansSemiExpanded_400Regular](./400Regular/ZalandoSansSemiExpanded_400Regular.ttf.png)||
|![ZalandoSansSemiExpanded_500Medium](./500Medium/ZalandoSansSemiExpanded_500Medium.ttf.png)|![ZalandoSansSemiExpanded_600SemiBold](./600SemiBold/ZalandoSansSemiExpanded_600SemiBold.ttf.png)|![ZalandoSansSemiExpanded_700Bold](./700Bold/ZalandoSansSemiExpanded_700Bold.ttf.png)||
|![ZalandoSansSemiExpanded_800ExtraBold](./800ExtraBold/ZalandoSansSemiExpanded_800ExtraBold.ttf.png)|![ZalandoSansSemiExpanded_900Black](./900Black/ZalandoSansSemiExpanded_900Black.ttf.png)|![ZalandoSansSemiExpanded_200ExtraLight_Italic](./200ExtraLight_Italic/ZalandoSansSemiExpanded_200ExtraLight_Italic.ttf.png)||
|![ZalandoSansSemiExpanded_300Light_Italic](./300Light_Italic/ZalandoSansSemiExpanded_300Light_Italic.ttf.png)|![ZalandoSansSemiExpanded_400Regular_Italic](./400Regular_Italic/ZalandoSansSemiExpanded_400Regular_Italic.ttf.png)|![ZalandoSansSemiExpanded_500Medium_Italic](./500Medium_Italic/ZalandoSansSemiExpanded_500Medium_Italic.ttf.png)||
|![ZalandoSansSemiExpanded_600SemiBold_Italic](./600SemiBold_Italic/ZalandoSansSemiExpanded_600SemiBold_Italic.ttf.png)|![ZalandoSansSemiExpanded_700Bold_Italic](./700Bold_Italic/ZalandoSansSemiExpanded_700Bold_Italic.ttf.png)|![ZalandoSansSemiExpanded_800ExtraBold_Italic](./800ExtraBold_Italic/ZalandoSansSemiExpanded_800ExtraBold_Italic.ttf.png)||
|![ZalandoSansSemiExpanded_900Black_Italic](./900Black_Italic/ZalandoSansSemiExpanded_900Black_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/zalando-sans-semiexpanded` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Zalando Sans SemiExpanded page on Google Fonts](https://fonts.google.com/specimen/Zalando+Sans+SemiExpanded) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Zalando Sans SemiExpanded on Google Fonts](https://fonts.google.com/specimen/Zalando+Sans+SemiExpanded)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/zalando-sans-semiexpanded)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/zalando-sans-semiexpanded)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
