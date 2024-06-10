import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TelegramChannelList } from "./telegramChannel/TelegramChannelList";
import { TelegramChannelCreate } from "./telegramChannel/TelegramChannelCreate";
import { TelegramChannelEdit } from "./telegramChannel/TelegramChannelEdit";
import { TelegramChannelShow } from "./telegramChannel/TelegramChannelShow";
import { TelegramConfigList } from "./telegramConfig/TelegramConfigList";
import { TelegramConfigCreate } from "./telegramConfig/TelegramConfigCreate";
import { TelegramConfigEdit } from "./telegramConfig/TelegramConfigEdit";
import { TelegramConfigShow } from "./telegramConfig/TelegramConfigShow";
import { TradeSignalList } from "./tradeSignal/TradeSignalList";
import { TradeSignalCreate } from "./tradeSignal/TradeSignalCreate";
import { TradeSignalEdit } from "./tradeSignal/TradeSignalEdit";
import { TradeSignalShow } from "./tradeSignal/TradeSignalShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"TelegramIntegration"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="TelegramChannel"
          list={TelegramChannelList}
          edit={TelegramChannelEdit}
          create={TelegramChannelCreate}
          show={TelegramChannelShow}
        />
        <Resource
          name="TelegramConfig"
          list={TelegramConfigList}
          edit={TelegramConfigEdit}
          create={TelegramConfigCreate}
          show={TelegramConfigShow}
        />
        <Resource
          name="TradeSignal"
          list={TradeSignalList}
          edit={TradeSignalEdit}
          create={TradeSignalCreate}
          show={TradeSignalShow}
        />
      </Admin>
    </div>
  );
};

export default App;
