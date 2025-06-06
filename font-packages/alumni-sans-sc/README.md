# @expo-google-fonts/alumni-sans-sc

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/alumni-sans-sc)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/alumni-sans-sc)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/alumni-sans-sc)

This package lets you use the [**Alumni Sans SC**](https://fonts.google.com/specimen/Alumni+Sans+SC) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Alumni Sans SC

![Alumni Sans SC](./font-family.png)

This font family contains [18 styles](#-gallery).

- `AlumniSansSC_100Thin`
- `AlumniSansSC_200ExtraLight`
- `AlumniSansSC_300Light`
- `AlumniSansSC_400Regular`
- `AlumniSansSC_500Medium`
- `AlumniSansSC_600SemiBold`
- `AlumniSansSC_700Bold`
- `AlumniSansSC_800ExtraBold`
- `AlumniSansSC_900Black`
- `AlumniSansSC_100Thin_Italic`
- `AlumniSansSC_200ExtraLight_Italic`
- `AlumniSansSC_300Light_Italic`
- `AlumniSansSC_400Regular_Italic`
- `AlumniSansSC_500Medium_Italic`
- `AlumniSansSC_600SemiBold_Italic`
- `AlumniSansSC_700Bold_Italic`
- `AlumniSansSC_800ExtraBold_Italic`
- `AlumniSansSC_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/alumni-sans-sc expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/alumni-sans-sc/useFonts';
import { AlumniSansSC_100Thin } from '@expo-google-fonts/alumni-sans-sc/100Thin';
import { AlumniSansSC_200ExtraLight } from '@expo-google-fonts/alumni-sans-sc/200ExtraLight';
import { AlumniSansSC_300Light } from '@expo-google-fonts/alumni-sans-sc/300Light';
import { AlumniSansSC_400Regular } from '@expo-google-fonts/alumni-sans-sc/400Regular';
import { AlumniSansSC_500Medium } from '@expo-google-fonts/alumni-sans-sc/500Medium';
import { AlumniSansSC_600SemiBold } from '@expo-google-fonts/alumni-sans-sc/600SemiBold';
import { AlumniSansSC_700Bold } from '@expo-google-fonts/alumni-sans-sc/700Bold';
import { AlumniSansSC_800ExtraBold } from '@expo-google-fonts/alumni-sans-sc/800ExtraBold';
import { AlumniSansSC_900Black } from '@expo-google-fonts/alumni-sans-sc/900Black';
import { AlumniSansSC_100Thin_Italic } from '@expo-google-fonts/alumni-sans-sc/100Thin_Italic';
import { AlumniSansSC_200ExtraLight_Italic } from '@expo-google-fonts/alumni-sans-sc/200ExtraLight_Italic';
import { AlumniSansSC_300Light_Italic } from '@expo-google-fonts/alumni-sans-sc/300Light_Italic';
import { AlumniSansSC_400Regular_Italic } from '@expo-google-fonts/alumni-sans-sc/400Regular_Italic';
import { AlumniSansSC_500Medium_Italic } from '@expo-google-fonts/alumni-sans-sc/500Medium_Italic';
import { AlumniSansSC_600SemiBold_Italic } from '@expo-google-fonts/alumni-sans-sc/600SemiBold_Italic';
import { AlumniSansSC_700Bold_Italic } from '@expo-google-fonts/alumni-sans-sc/700Bold_Italic';
import { AlumniSansSC_800ExtraBold_Italic } from '@expo-google-fonts/alumni-sans-sc/800ExtraBold_Italic';
import { AlumniSansSC_900Black_Italic } from '@expo-google-fonts/alumni-sans-sc/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    AlumniSansSC_100Thin, 
    AlumniSansSC_200ExtraLight, 
    AlumniSansSC_300Light, 
    AlumniSansSC_400Regular, 
    AlumniSansSC_500Medium, 
    AlumniSansSC_600SemiBold, 
    AlumniSansSC_700Bold, 
    AlumniSansSC_800ExtraBold, 
    AlumniSansSC_900Black, 
    AlumniSansSC_100Thin_Italic, 
    AlumniSansSC_200ExtraLight_Italic, 
    AlumniSansSC_300Light_Italic, 
    AlumniSansSC_400Regular_Italic, 
    AlumniSansSC_500Medium_Italic, 
    AlumniSansSC_600SemiBold_Italic, 
    AlumniSansSC_700Bold_Italic, 
    AlumniSansSC_800ExtraBold_Italic, 
    AlumniSansSC_900Black_Italic
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
          fontFamily: "AlumniSansSC_100Thin"
        }}>
          Alumni Sans SC Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlumniSansSC_200ExtraLight"
        }}>
          Alumni Sans SC Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlumniSansSC_300Light"
        }}>
          Alumni Sans SC Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlumniSansSC_400Regular"
        }}>
          Alumni Sans SC Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlumniSansSC_500Medium"
        }}>
          Alumni Sans SC Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlumniSansSC_600SemiBold"
        }}>
          Alumni Sans SC Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlumniSansSC_700Bold"
        }}>
          Alumni Sans SC Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlumniSansSC_800ExtraBold"
        }}>
          Alumni Sans SC Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlumniSansSC_900Black"
        }}>
          Alumni Sans SC Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlumniSansSC_100Thin_Italic"
        }}>
          Alumni Sans SC Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlumniSansSC_200ExtraLight_Italic"
        }}>
          Alumni Sans SC Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlumniSansSC_300Light_Italic"
        }}>
          Alumni Sans SC Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlumniSansSC_400Regular_Italic"
        }}>
          Alumni Sans SC Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlumniSansSC_500Medium_Italic"
        }}>
          Alumni Sans SC Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlumniSansSC_600SemiBold_Italic"
        }}>
          Alumni Sans SC Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlumniSansSC_700Bold_Italic"
        }}>
          Alumni Sans SC Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlumniSansSC_800ExtraBold_Italic"
        }}>
          Alumni Sans SC Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlumniSansSC_900Black_Italic"
        }}>
          Alumni Sans SC Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![AlumniSansSC_100Thin](./100Thin/AlumniSansSC_100Thin.ttf.png)|![AlumniSansSC_200ExtraLight](./200ExtraLight/AlumniSansSC_200ExtraLight.ttf.png)|![AlumniSansSC_300Light](./300Light/AlumniSansSC_300Light.ttf.png)||
|![AlumniSansSC_400Regular](./400Regular/AlumniSansSC_400Regular.ttf.png)|![AlumniSansSC_500Medium](./500Medium/AlumniSansSC_500Medium.ttf.png)|![AlumniSansSC_600SemiBold](./600SemiBold/AlumniSansSC_600SemiBold.ttf.png)||
|![AlumniSansSC_700Bold](./700Bold/AlumniSansSC_700Bold.ttf.png)|![AlumniSansSC_800ExtraBold](./800ExtraBold/AlumniSansSC_800ExtraBold.ttf.png)|![AlumniSansSC_900Black](./900Black/AlumniSansSC_900Black.ttf.png)||
|![AlumniSansSC_100Thin_Italic](./100Thin_Italic/AlumniSansSC_100Thin_Italic.ttf.png)|![AlumniSansSC_200ExtraLight_Italic](./200ExtraLight_Italic/AlumniSansSC_200ExtraLight_Italic.ttf.png)|![AlumniSansSC_300Light_Italic](./300Light_Italic/AlumniSansSC_300Light_Italic.ttf.png)||
|![AlumniSansSC_400Regular_Italic](./400Regular_Italic/AlumniSansSC_400Regular_Italic.ttf.png)|![AlumniSansSC_500Medium_Italic](./500Medium_Italic/AlumniSansSC_500Medium_Italic.ttf.png)|![AlumniSansSC_600SemiBold_Italic](./600SemiBold_Italic/AlumniSansSC_600SemiBold_Italic.ttf.png)||
|![AlumniSansSC_700Bold_Italic](./700Bold_Italic/AlumniSansSC_700Bold_Italic.ttf.png)|![AlumniSansSC_800ExtraBold_Italic](./800ExtraBold_Italic/AlumniSansSC_800ExtraBold_Italic.ttf.png)|![AlumniSansSC_900Black_Italic](./900Black_Italic/AlumniSansSC_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/alumni-sans-sc` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Alumni Sans SC page on Google Fonts](https://fonts.google.com/specimen/Alumni+Sans+SC) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Alumni Sans SC on Google Fonts](https://fonts.google.com/specimen/Alumni+Sans+SC)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/alumni-sans-sc)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/alumni-sans-sc)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
