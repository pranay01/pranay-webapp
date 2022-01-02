---
title: Can Blockchains solve the issues of trust in Supply Chain? 👇
slug: supply-chains-in-blockchain
date_published: 2018-06-30T04:29:15.000Z
date_updated: 2018-06-30T10:19:37.000Z
tags: [blockchain, supplychain]
description: One particular case which many people tout as a good use case of blockchains are Supply chains. Somehow its intuitive to people that blockchain should help here.
---

I recently did a tweetstorm on applicability of blockchains in supply chain. Here's an unrolled version:

1/ Nowadays, blockchains are peddled as a solution to many problems. But quite simply they are nothing more than distributed databases - with one important difference. There is no central party which operates/controls these databases.

2/ Blockchains can only be useful in cases where there are multiple parties and there is a problem of trust. i.e. neither they trust each other nor there is a central third party which everyone trusts. If any of these conditions are not true, blockchain is not needed.

3/ One particular case which many people tout as a good use case of blockchains are Supply chains. Somehow its intuitive to people that blockchain should help here. Coz’

4/

a. Supply chains are complex and involve multiple parties

b. There are almost always problems of trust. You can’t expect disparate suppliers to trust each other, can you?

Isn’t it obvious that blockchains should help in supply chain?

![Screen-Shot-2018-06-30-at-9.57.06-AM](/img/2018/06/Screen-Shot-2018-06-30-at-9.57.06-AM.jpg)

5/ Well, it’s not that simple. Blockchains do not “know” anything about the physical “wet” world. So, somebody/something needs to push that data about the “real” world on the blockchain. And this is where the problem starts.

6/ How do we know that the data being pushed on the blockchain is accurate?

In a supply chain, generally, data about containers are pushed on the blockchain by IoT sensors. Data in the blockchain is as good as the reliability of the sensors.

7/ What if a sensor on a container has been tampered with? Or the sensor is removed from the container and attached to some other container? Blockchain can’t do anything about this. There need to be other methods to control this. Anti-tampering solutions.

8/ Though what blockchain can help in is that - the data stored in the blockchain can’t be censored. If there are multiple parties operating the blockchain network, any rogue operation will be visible to all the parties running the nodes.

![Screen-Shot-2018-06-30-at-9.57.31-AM](/img/2018/06/Screen-Shot-2018-06-30-at-9.57.31-AM.jpg)

9/ This is a big improvement over centralised databases like SQL where the admin of the database or the admin of the server can make changes in the database without anybody knowing. Or the admin can can prevent specific entities from writing to the database (because there's only one copy and he is the incharge of it). This is censorship and this is what blockchain prevents.

10/ The key problem is that there is no unique way to identify a container digitally apart from the sensors/tags/codes attached to them - and these tags can easily be replaced/removed/tampered with.

11/ Unless… Unless the item itself has a unique digital fingerprint. In that case, tracking the item on blockchain makes sense. Diamonds, for example, are said to have a unique laser reflection fingerprint. [https://diamonds.everledger.io/](https://diamonds.everledger.io/)

![Screen-Shot-2018-06-30-at-9.57.20-AM](/img/2018/06/Screen-Shot-2018-06-30-at-9.57.20-AM.jpg)

12/ Or you have a physical lock on the object which can be digitally controlled. In this case, you must ensure that the gain for any attacker in breaking the lock is lower than effort in breaking the lock. [http://slock.it](http://slock.it) uses such smart locks for renting things like cycles, etc.

![Screen-Shot-2018-06-30-at-9.57.44-AM](/img/2018/06/Screen-Shot-2018-06-30-at-9.57.44-AM.jpg)

13/ To conclude: Blockchains can’t provide product provenance in a supply chain. It is still the domain of sensors and how reliable they are. What blockchains can do though is that, if some data is stored in the blockchain - it can’t be altered.

14/ If somebody tries to alter it (basically attacks the blockchain), every other node in the supply chain will know about it and hence appropriate steps can be taken. Nothing more. Nothing less.

15/ So, next time somebody comes and tells you that blockchain can solve the issues in supply chain - please ask them how would they ensure that the data pushed on blockchain is not getting tampered. And then grab a beer :)

---

Thanks [Nilesh](https://twitter.com/nileshtrivedi) for providing initial feedback on the post.
