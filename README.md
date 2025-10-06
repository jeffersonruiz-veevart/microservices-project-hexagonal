<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

This project implements an architecture based on **microservices** using **NestJS** and the **hexagonal architecture (Ports & Adapters)** approach.
The main objective is to maintain highly decoupled, testable, and easy-to-maintain code by separating business rules from the framework and infrastructure.

## 🧩 Hexagonal Architecture (Ports & Adapters)

**Hexagonal architecture**, also known as *Ports & Adapters*, seeks to separate the **core business** (domain and use cases) from **external mechanisms** (databases, APIs, messaging, etc.).

The core communicates with the outside world through **ports** (interfaces), while **adapters** implement those interfaces to interact with specific technologies.

Translated with DeepL.com (free version)

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

### 🔷 Suggested folder structure

```
│   └── users
│       ├── application            # Use cases / Interactors / DTOs
│       │   └── use-cases
│       ├── domain                 # Entidades, objetos de valor, servicios de dominio
│       │   ├── entities
│       │   ├── ports              # Interfaces (ports) used by the domain
│       │   │   ├── inbound        # (Input ports)
│       │   │   └── outbound       # (Output ports)
│       ├── infrastructure         # Technical interaction (HTTP, DB, queues, etc.)
│       │   ├── adapters
│       │   ├── controllers
│       ├── user.module.d.ts
│       ├── user.module.js
│       └── user.module.js.map
```

## 🪄 Dependency injection with tokens and symbols

In NestJS, **tokens** identify which implementation should be injected.  
When using **interfaces** (which do not exist at runtime), a **symbolic token** is used:

```ts
export const USER_PROMOTION_SERVICE = Symbol('USER_PROMOTION_SERVICE');
```

This creates a **unique and secure** identifier, avoiding collisions and keeping the contract decoupled.

### 🧩 Context: dependency injection in NestJS

In NestJS, when you use decorators such as:

```ts
@Injectable()
export class SomeService {}
```

and then inject it with:

```ts
constructor(private readonly someService: SomeService) {}
```
Nest uses the class name (SomeService) as a token to resolve the dependency in its Dependency Injection Container.

But when you define interfaces or abstract classes (as in hexagonal architecture), Nest cannot inject them directly, because interfaces do not exist in JavaScript at runtime.

For example, this does not work:

```ts
export interface UserPromotionService {
  promoteUser(userId: string): Promise<void>;
}

// ❌ No funciona
constructor(private readonly promotionService: UserPromotionService) {}
```
### 💡 Solution: use a symbolic token

To solve this problem, we define a manual token, using Symbol() or a string constant:

```ts
export const USER_PROMOTION_SERVICE = Symbol('USER_PROMOTION_SERVICE');
```

- Symbol(‘USER_PROMOTION_SERVICE’) creates a unique value (ensuring that no one else accidentally uses the same identifier).

- You export it for use both in the provider (where the implementation is registered) and in the consumer (where it is injected).

### Conclusion:

The Symbol(‘USER_PROMOTION_SERVICE’) serves as a unique and secure token to identify a dependency (a specific implementation) that complies with a contract (interface or port).
This allows the core of your application (use cases) to depend only on the port (interface), while the infrastructure (adapter) is registered and injected without coupling the code.
