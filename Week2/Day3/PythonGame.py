import random

print("""
Welcome Commander.

You are tasked with intercepting and destroying the Flagon
destroyer that threatens the Galactic Empire mothership.

Failure is not an option.

You must protect the mothership at all costs!""")

def actions():
    print("""
    Press '1' to fire Main Blasters
    Press '2' to fire Ion Cannons
    Press '3' to attempt an evasive maneuver
    Press '4' to check your starship's health
    Press '5' to check enemy's health
    
    ***Press '6' to commit GALACTIC TREASON and
    escape the fight with warp speed***""")

class Hero:
    def __init__(self, health, name, attack):
        self.health = health
        self.name = name
        self.attack = attack
        
    def takeDamage(self, healthLoss):
        self.health -= healthLoss


class Villain:
    def __init__(self, health, name, attack):
        self.health = health
        self.attack = attack
        self.name = name
        
    def takeDamage(self, healthLoss):
        self.health -= healthLoss


user = Hero(100, "Commander", 10)
npc = Villain(100, "Flagon destroyer", 10)
attack2 = random.randint(10,50)
attack1 = random.randint(20,25)


Battle = True
while Battle:
    actions()

    if user.health <= 30:
        print("\n*Starship systems critical. Destruction imminent!*\n")
    
    if npc.health <= 30:
        print("\n*Enemy destroyer's systems are critical. Their destruction is imminent!*\n")
    
    userChoice = input("Select an action: ")
    
    if userChoice == "6":
        print("""        
        You have committed GALACTIC TREASON
        and the Flagon ship obliterated the Galactic
        Empire Mothership. You will be known as a coward 
        and traitor for the rest of your days!\n""")
        
        Battle = False
    
    if userChoice == "5":
        print("\nYour enemy destroyer's health is " + str(npc.health))
    
    if userChoice == "4":
        print("\nYour starfighter's health is " + str(user.health))
    
    if userChoice == "3":
        evadeChance = random.randint(1,10)
        if evadeChance >= 5:
            user.takeDamage(attack2)
            print("\nYou were unable to evade the Flagon's attack and were hit by their lasers!")
        elif evadeChance < 5:
            print("\nYou were able to evade the Flagon's attack")
    
    if userChoice == "2":
        attackChance = random.randint(1,10)
        if attackChance <= 5:
            user.takeDamage(npc.attack)
            print("\nYour Ion Cannons missed the Flagon destroyer and they retaliated!")
        if attackChance > 5:
            npc.takeDamage(attack2)
            print("\nYour Ion Cannons hit the Flagon destroyer and they recieved high damage!")
    if userChoice == "1":
        attackChance = random.randint(1,10)
        if attackChance >= 5:
            npc.takeDamage(attack1)
            print("\nYou attack the Flagon Destroyer with your Main Blasters and deal moderate damage")
        if attackChance < 5:
            user.takeDamage(attack1)
            print("\nYou attacked the Flagon Destroyer and missed. The Flagon destroyer retaliates!")

    if user.health <= 0:
        print("\nYour ship has been destroyed and the Flagon ship will surely destroy the Galactic Empire mothership. All hope is lost.")
        Battle = False
    
    if npc.health <= 0:
        print("\nThe Flagon destroyer has been destroyed and the Galactic Empire mothership has been saved. The galaxy is safe!")
        Battle = False
