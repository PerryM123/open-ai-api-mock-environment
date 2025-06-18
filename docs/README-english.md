# OpenAI API Mock Environment (Split My Receipt Up)

※ [日本語のREADME.mdはここ！](./../README.md)👈

Since using OpenAI API requires tokens, this mock environment will act as OpenAI during my development progress.

- [Frontend](https://github.com/PerryM123/split-my-receipt-up-frontend)
- [Backend](https://github.com/PerryM123/memories_backend)

## Simple Architecture for Mock Environment
![alt text](/docs/images/simple-architecture-with-mock.jpg)


## Setup Local Environment

```sh
$ git clone git@github.com:PerryM123/open-ai-api-mock-environment.git
$ cd split-my-receipt-up-frontend open-ai-api-mock-environment.git
$ yarn
$ yarn dev
# If you want to simulate an OpenAI API "You didn't provide an API key." error 
$ yarn dev:error-pattern
```