# OpenAI API Mock Environment (Split My Receipt Up)

OpenAI APIを利用するとトークンがかかるので動作確認用のモック環境を用意しました。

## 簡単なアーキテクチャ設計（モック用）
![alt text](/docs/images/simple-architecture-with-mock.jpg)

## ローカル環境構築

```sh
$ git clone git@github.com:PerryM123/open-ai-api-mock-environment.git
$ cd split-my-receipt-up-frontend open-ai-api-mock-environment.git
$ yarn
$ yarn dev
# OpenAI API「You didn't provide an API key.」のエラーパターンを再現したい場合
$ yarn dev:error-pattern
```