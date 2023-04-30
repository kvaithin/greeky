import csv

data_path = 'src/scripts/data.csv'
output_path = 'src/scripts/input_data.cypher'

# create nodes
with open(data_path, 'r') as f:
    reader = csv.DictReader(f)
    with open(output_path, 'w') as outfile:
        outfile.write("CREATE CONSTRAINT FOR (god:GOD) REQUIRE god.name IS UNIQUE;\n")
        for i, row in enumerate(reader):
            cypher_dict = {
                'name': row['name'],
                'alias': row['alias'],
                'gender': row['gender'],
                'is_titan': row['is_titan'],
                'is_cyclops': row['is_cyclops'],
                'is_hundred_handers': row['is_hundred_handers'],
                'is_sisters_of_fate': row['is_sisters_of_fate'],
                'is_harpy_sisters': row['is_harpy_sisters'],
                'is_the_old_women': row['is_the_old_women'],
                'is_the_gorgons': row['is_the_gorgons'],
                'is_nereid': row['is_nereid'],
                'is_okenid': row['is_okenid'],
                'is_pleiad': row['is_pleiad'],
                'is_anemoi': row['is_anemoi'],
                'is_muse': row['is_muse'],
                'is_the_charities': row['is_the_charities'],
                'is_the_seasons': row['is_the_seasons'],
                'is_the_pains': row['is_the_pains']
            }
            cypher_dict = {k: v for k, v in cypher_dict.items() if v}
            outfile.write("CREATE (:GOD { ")
            outfile.write(', '.join(f"{k}: '{v}'" for k, v in cypher_dict.items()))
            outfile.write(" });\n")


# create procreated_with relations
with open(data_path, 'r') as f:
    reader = csv.DictReader(f)
    with open(output_path, 'a') as outfile:
        for i, row in enumerate(reader):
            if 'procreated_with' in row and row['procreated_with']:
                for parent_name in row['procreated_with'].strip('[]').split(':'):
                    outfile.write(f"MATCH (a:GOD {{ name: '{row['name']}' }}), (b:GOD {{ name: '{parent_name}' }})\n")
                    outfile.write("MERGE (a)-[:PROCREATED_WITH]->(b)\n")
                    outfile.write("MERGE (b)-[:PROCREATED_WITH]->(a);\n")


# create descendant and ancestor relations
with open(data_path, 'r') as f:
    reader = csv.DictReader(f)
    with open(output_path, 'a') as outfile:
        for i, row in enumerate(reader):
            if 'descendant_of' in row and row['descendant_of']:
                for parent_name in row['descendant_of'].strip('[]').split(':'):
                    outfile.write(f"MATCH (a:GOD {{ name: '{row['name']}' }}), (b:GOD {{ name: '{parent_name}' }})\n")
                    outfile.write("MERGE (a)-[:DESCENDANT_OF]->(b)\n")
                    outfile.write("MERGE (b)-[:ANCESTOR_OF]->(a);\n")

