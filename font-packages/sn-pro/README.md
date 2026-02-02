# @expo-google-fonts/sn-pro

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/sn-pro)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/sn-pro)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/sn-pro)

This package lets you use the [**SN Pro**](https://fonts.google.com/specimen/SN+Pro) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## SN Pro

![SN Pro](./font-family.png)

This font family contains [16 styles](#-gallery).

- `SNPro_200ExtraLight`
- `SNPro_300Light`
- `SNPro_400Regular`
- `SNPro_500Medium`
- `SNPro_600SemiBold`
- `SNPro_700Bold`
- `SNPro_800ExtraBold`
- `SNPro_900Black`
- `SNPro_200ExtraLight_Italic`
- `SNPro_300Light_Italic`
- `SNPro_400Regular_Italic`
- `SNPro_500Medium_Italic`
- `SNPro_600SemiBold_Italic`
- `SNPro_700Bold_Italic`
- `SNPro_800ExtraBold_Italic`
- `SNPro_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/sn-pro expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/sn-pro/useFonts';
import { SNPro_200ExtraLight } from '@expo-google-fonts/sn-pro/200ExtraLight';
import { SNPro_300Light } from '@expo-google-fonts/sn-pro/300Light';
import { SNPro_400Regular } from '@expo-google-fonts/sn-pro/400Regular';
import { SNPro_500Medium } from '@expo-google-fonts/sn-pro/500Medium';
import { SNPro_600SemiBold } from '@expo-google-fonts/sn-pro/600SemiBold';
import { SNPro_700Bold } from '@expo-google-fonts/sn-pro/700Bold';
import { SNPro_800ExtraBold } from '@expo-google-fonts/sn-pro/800ExtraBold';
import { SNPro_900Black } from '@expo-google-fonts/sn-pro/900Black';
import { SNPro_200ExtraLight_Italic } from '@expo-google-fonts/sn-pro/200ExtraLight_Italic';
import { SNPro_300Light_Italic } from '@expo-google-fonts/sn-pro/300Light_Italic';
import { SNPro_400Regular_Italic } from '@expo-google-fonts/sn-pro/400Regular_Italic';
import { SNPro_500Medium_Italic } from '@expo-google-fonts/sn-pro/500Medium_Italic';
import { SNPro_600SemiBold_Italic } from '@expo-google-fonts/sn-pro/600SemiBold_Italic';
import { SNPro_700Bold_Italic } from '@expo-google-fonts/sn-pro/700Bold_Italic';
import { SNPro_800ExtraBold_Italic } from '@expo-google-fonts/sn-pro/800ExtraBold_Italic';
import { SNPro_900Black_Italic } from '@expo-google-fonts/sn-pro/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    SNPro_200ExtraLight, 
    SNPro_300Light, 
    SNPro_400Regular, 
    SNPro_500Medium, 
    SNPro_600SemiBold, 
    SNPro_700Bold, 
    SNPro_800ExtraBold, 
    SNPro_900Black, 
    SNPro_200ExtraLight_Italic, 
    SNPro_300Light_Italic, 
    SNPro_400Regular_Italic, 
    SNPro_500Medium_Italic, 
    SNPro_600SemiBold_Italic, 
    SNPro_700Bold_Italic, 
    SNPro_800ExtraBold_Italic, 
    SNPro_900Black_Italic
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
          fontFamily: "SNPro_200ExtraLight"
        }}>
          SN Pro Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SNPro_300Light"
        }}>
          SN Pro Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SNPro_400Regular"
        }}>
          SN Pro Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SNPro_500Medium"
        }}>
          SN Pro Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SNPro_600SemiBold"
        }}>
          SN Pro Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SNPro_700Bold"
        }}>
          SN Pro Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SNPro_800ExtraBold"
        }}>
          SN Pro Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SNPro_900Black"
        }}>
          SN Pro Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SNPro_200ExtraLight_Italic"
        }}>
          SN Pro Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SNPro_300Light_Italic"
        }}>
          SN Pro Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SNPro_400Regular_Italic"
        }}>
          SN Pro Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SNPro_500Medium_Italic"
        }}>
          SN Pro Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SNPro_600SemiBold_Italic"
        }}>
          SN Pro Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SNPro_700Bold_Italic"
        }}>
          SN Pro Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SNPro_800ExtraBold_Italic"
        }}>
          SN Pro Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SNPro_900Black_Italic"
        }}>
          SN Pro Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![SNPro_200ExtraLight](./200ExtraLight/SNPro_200ExtraLight.ttf.png)|![SNPro_300Light](./300Light/SNPro_300Light.ttf.png)|![SNPro_400Regular](./400Regular/SNPro_400Regular.ttf.png)||
|![SNPro_500Medium](./500Medium/SNPro_500Medium.ttf.png)|![SNPro_600SemiBold](./600SemiBold/SNPro_600SemiBold.ttf.png)|![SNPro_700Bold](./700Bold/SNPro_700Bold.ttf.png)||
|![SNPro_800ExtraBold](./800ExtraBold/SNPro_800ExtraBold.ttf.png)|![SNPro_900Black](./900Black/SNPro_900Black.ttf.png)|![SNPro_200ExtraLight_Italic](./200ExtraLight_Italic/SNPro_200ExtraLight_Italic.ttf.png)||
|![SNPro_300Light_Italic](./300Light_Italic/SNPro_300Light_Italic.ttf.png)|![SNPro_400Regular_Italic](./400Regular_Italic/SNPro_400Regular_Italic.ttf.png)|![SNPro_500Medium_Italic](./500Medium_Italic/SNPro_500Medium_Italic.ttf.png)||
|![SNPro_600SemiBold_Italic](./600SemiBold_Italic/SNPro_600SemiBold_Italic.ttf.png)|![SNPro_700Bold_Italic](./700Bold_Italic/SNPro_700Bold_Italic.ttf.png)|![SNPro_800ExtraBold_Italic](./800ExtraBold_Italic/SNPro_800ExtraBold_Italic.ttf.png)||
|![SNPro_900Black_Italic](./900Black_Italic/SNPro_900Black_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/sn-pro` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [SN Pro page on Google Fonts](https://fonts.google.com/specimen/SN+Pro) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [SN Pro on Google Fonts](https://fonts.google.com/specimen/SN+Pro)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/sn-pro)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/sn-pro)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
