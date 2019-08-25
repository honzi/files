# Nether
execute as @s at @s if block ~ 126 ~ minecraft:bedrock run teleport @s 19 74 -12

# Overworld
execute as @s at @s unless block ~ 126 ~ minecraft:bedrock run teleport @s 105 68 -193
