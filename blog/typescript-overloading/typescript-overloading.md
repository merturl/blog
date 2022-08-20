---
title: Typescript overloading
date: 2022-05-02T04:43:20.665Z
description: Overloading in Typescript
tags:
  - typescript
  - overloading
thumbnail: images/ts_overloading.png
---

Typescript에서 function과 method의 오버로딩을 지원하는데 사용하는 방법은 아래와 같다.

```typescript
class SummonerRepository {
  constructor(private manager: EntityManager) {}
  save<T extends Summoner | Summoner[]>(
    summoner: T
  ): T extends Summoner ? Promise<Summoner> : Promise<Summoner[]>; //Overload Signature
  save(summoner: Summoner | Summoner[]) { //Implementation Signature
    return this.manager.save(summoner);
  }
}

summonerRepository = getCustomRepository(SummonerRepository);

const result = await summonerRepository.save(dto);
// dto 타입이 Summoner[]라면 result는 Promise<Summoner[]> 반대로 dto 타입이 Summoner라면 Promise<Summoner>이 된다.

```
