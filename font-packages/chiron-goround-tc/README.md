# @expo-google-fonts/chiron-goround-tc

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/chiron-goround-tc)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/chiron-goround-tc)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/chiron-goround-tc)

This package lets you use the [**Chiron GoRound TC**](https://fonts.google.com/specimen/Chiron+GoRound+TC) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Chiron GoRound TC

![Chiron GoRound TC](./font-family.png)

This font family contains [8 styles](#-gallery).

- `ChironGoRoundTC_200ExtraLight`
- `ChironGoRoundTC_300Light`
- `ChironGoRoundTC_400Regular`
- `ChironGoRoundTC_500Medium`
- `ChironGoRoundTC_600SemiBold`
- `ChironGoRoundTC_700Bold`
- `ChironGoRoundTC_800ExtraBold`
- `ChironGoRoundTC_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/chiron-goround-tc expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/chiron-goround-tc/useFonts';
import { ChironGoRoundTC_200ExtraLight } from '@expo-google-fonts/chiron-goround-tc/200ExtraLight';
import { ChironGoRoundTC_300Light } from '@expo-google-fonts/chiron-goround-tc/300Light';
import { ChironGoRoundTC_400Regular } from '@expo-google-fonts/chiron-goround-tc/400Regular';
import { ChironGoRoundTC_500Medium } from '@expo-google-fonts/chiron-goround-tc/500Medium';
import { ChironGoRoundTC_600SemiBold } from '@expo-google-fonts/chiron-goround-tc/600SemiBold';
import { ChironGoRoundTC_700Bold } from '@expo-google-fonts/chiron-goround-tc/700Bold';
import { ChironGoRoundTC_800ExtraBold } from '@expo-google-fonts/chiron-goround-tc/800ExtraBold';
import { ChironGoRoundTC_900Black } from '@expo-google-fonts/chiron-goround-tc/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    ChironGoRoundTC_200ExtraLight, 
    ChironGoRoundTC_300Light, 
    ChironGoRoundTC_400Regular, 
    ChironGoRoundTC_500Medium, 
    ChironGoRoundTC_600SemiBold, 
    ChironGoRoundTC_700Bold, 
    ChironGoRoundTC_800ExtraBold, 
    ChironGoRoundTC_900Black
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
          fontFamily: "ChironGoRoundTC_200ExtraLight"
        }}>
          Chiron GoRound TC Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChironGoRoundTC_300Light"
        }}>
          Chiron GoRound TC Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChironGoRoundTC_400Regular"
        }}>
          Chiron GoRound TC Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChironGoRoundTC_500Medium"
        }}>
          Chiron GoRound TC Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChironGoRoundTC_600SemiBold"
        }}>
          Chiron GoRound TC Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChironGoRoundTC_700Bold"
        }}>
          Chiron GoRound TC Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChironGoRoundTC_800ExtraBold"
        }}>
          Chiron GoRound TC Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChironGoRoundTC_900Black"
        }}>
          Chiron GoRound TC Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![ChironGoRoundTC_200ExtraLight](./200ExtraLight/ChironGoRoundTC_200ExtraLight.ttf.png)|![ChironGoRoundTC_300Light](./300Light/ChironGoRoundTC_300Light.ttf.png)|![ChironGoRoundTC_400Regular](./400Regular/ChironGoRoundTC_400Regular.ttf.png)||
|![ChironGoRoundTC_500Medium](./500Medium/ChironGoRoundTC_500Medium.ttf.png)|![ChironGoRoundTC_600SemiBold](./600SemiBold/ChironGoRoundTC_600SemiBold.ttf.png)|![ChironGoRoundTC_700Bold](./700Bold/ChironGoRoundTC_700Bold.ttf.png)||
|![ChironGoRoundTC_800ExtraBold](./800ExtraBold/ChironGoRoundTC_800ExtraBold.ttf.png)|![ChironGoRoundTC_900Black](./900Black/ChironGoRoundTC_900Black.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/chiron-goround-tc` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Chiron GoRound TC page on Google Fonts](https://fonts.google.com/specimen/Chiron+GoRound+TC) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Chiron GoRound TC on Google Fonts](https://fonts.google.com/specimen/Chiron+GoRound+TC)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/chiron-goround-tc)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/chiron-goround-tc)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
