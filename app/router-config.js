import { AccountController } from "./controllers/AccountController.js";
import { HighTierController } from "./controllers/HighTierController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ItemController } from "./controllers/ItemsController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [HomeController, HighTierController],
    view: 'app/views/HomeView.html'
  },
  {
    path: '#/computers',
    controllers: [ItemController],
    view: 'app/views/ComputerView.html'
  },
  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])




