import { useState, useMemo } from 'react';
import {
  TextField,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const feats = [
  { name: 'Alert', description: 'Add your proficiency bonus to Initiative rolls. After rolling Initiative, you may swap your Initiative with a willing ally.', category: 'Origin Feats' },
  { name: 'Crafter', description: 'You gain proficiency with 3 Artisan\'s Tools. You receive a 20% discount when you buy a nonmagical item. During a Long Rest you may craft a piece of gear...', category: 'Origin Feats' },
  { name: 'Healer', description: 'With a Utilize action, you can expend 1 use of a Healer\'s Kit on a creature within 5 ft...', category: 'Origin Feats' },
  { name: 'Lucky', description: 'You have a number of Luck Points equal to your proficiency bonus...', category: 'Origin Feats' },
  { name: 'Magic Initiate', description: 'You learn two cantrips and a Level 1 Spell of your choice...', category: 'Origin Feats' },
  { name: 'Musician', description: 'You gain proficiency with 3 Musical Instruments...', category: 'Origin Feats' },
  { name: 'Savage Attacker', description: 'Once per turn when you deal damage with a weapon...', category: 'Origin Feats' },
  { name: 'Skilled', description: 'You gain proficiency with 3 skills or tools...', category: 'Origin Feats' },
  { name: 'Tavern Brawler', description: 'Your Unarmed Strikes deal 1d4+STR damage...', category: 'Origin Feats' },
  { name: 'Tough', description: 'Your HP max increases by 2 times your character level...', category: 'Origin Feats' },
  { name: 'Ability Score Improvement', description: 'You increase one ability score by 2 or two ability scores by 1.', category: 'General Feats' },
  { name: 'Actor', description: '+1 CHA. Advantage on Deception and Performance checks...', category: 'General Feats', requires: '13+ CHA' },
  { name: 'Athlete', description: '+1 STR or DEX...', category: 'General Feats', requires: '13+ STR or DEX' },
  { name: 'Charger', description: '+1 STR or DEX...', category: 'General Feats', requires: '13+ STR or DEX' },
  { name: 'Chef', description: '+1 CON or WIS...', category: 'General Feats' },
  { name: 'Crossbow Expert', description: '+1 DEX...', category: 'General Feats', requires: '13+ DEX' },
  { name: 'Crusher', description: '+1 STR or CON...', category: 'General Feats' },
  { name: 'Defensive Duelist', description: '+1 DEX...', category: 'General Feats', requires: '13+ DEX' },
  { name: 'Dual Wielder', description: '+1 STR or DEX...', category: 'General Feats', requires: '13+ STR or DEX' },
  { name: 'Durable', description: '+1 CON...', category: 'General Feats' },
  { name: 'Elemental Adept', description: '+1 INT, WIS, or CHA...', category: 'General Feats', requires: 'Spellcasting' },
  { name: 'Fey Touched', description: '+1 INT, WIS, or CHA...', category: 'General Feats' },
  { name: 'Grappler', description: '+1 STR or DEX...', category: 'General Feats', requires: '13+ STR or DEX' },
  { name: 'Great Weapon Master', description: '+1 STR...', category: 'General Feats', requires: '13+ STR' },
  { name: 'Heavily Armored', description: '+1 STR...', category: 'General Feats', requires: 'Medium Armor' },
  { name: 'Heavy Armor Master', description: '+1 STR or CON...', category: 'General Feats', requires: 'Heavy Armor' },
  { name: 'Inspiring Leader', description: '+1 WIS or CHA...', category: 'General Feats', requires: '13+ WIS or CHA' },
  { name: 'Keen Mind', description: '+1 INT...', category: 'General Feats', requires: '13+ INT' },
  { name: 'Lightly Armored', description: '+1 STR or DEX...', category: 'General Feats' },
  { name: 'Mage Slayer', description: '+1 STR or DEX...', category: 'General Feats' },
  { name: 'Martial Weapon Training', description: '+1 STR or DEX...', category: 'General Feats' },
  { name: 'Medium Armor Master', description: '+1 STR or DEX...', category: 'General Feats', requires: 'Medium Armor' },
  { name: 'Moderately Armored', description: '+1 STR or DEX...', category: 'General Feats' },
  { name: 'Mounted Combatant', description: '+1 STR, DEX, or WIS...', category: 'General Feats' },
  { name: 'Observant', description: '+1 INT or WIS...', category: 'General Feats', requires: '13+ INT or WIS' },
  { name: 'Piercer', description: '+1 STR or DEX...', category: 'General Feats' },
  { name: 'Poisoner', description: '+1 DEX or INT...', category: 'General Feats' },
  { name: 'Polearm Master', description: '+1 STR or DEX...', category: 'General Feats', requires: '13+ STR or DEX' },
  { name: 'Resilient', description: '+1 to any score...', category: 'General Feats' },
  { name: 'Ritualist', description: '+1 INT, WIS, or CHA...', category: 'General Feats', requires: '13+ INT, WIS, or CHA' },
  { name: 'Sentinel', description: '+1 STR or DEX...', category: 'General Feats', requires: '13+ STR or DEX' },
  { name: 'Shadow Touched', description: '+1 INT, WIS, or CHA...', category: 'General Feats' },
  { name: 'Sharpshooter', description: '+1 DEX...', category: 'General Feats', requires: '13+ DEX' },
  { name: 'Shield Master', description: '+1 STR...', category: 'General Feats', requires: 'Shields' },
  { name: 'Skill Expert', description: '+1 to any score...', category: 'General Feats' },
  { name: 'Skulker', description: '+1 DEX...', category: 'General Feats', requires: '13+ DEX' },
  { name: 'Slasher', description: '+1 STR or DEX...', category: 'General Feats' },
  { name: 'Speedy', description: '+1 DEX or CON...', category: 'General Feats', requires: '13+ DEX or CON' },
  { name: 'Spell Sniper', description: '+1 INT, WIS, or CHA...', category: 'General Feats', requires: 'Spellcasting' },
  { name: 'Telekinetic', description: '+1 INT, WIS, or CHA...', category: 'General Feats' },
  { name: 'Telepathic', description: '+1 INT, WIS, or CHA...', category: 'General Feats' },
  { name: 'War Caster', description: '+1 INT, WIS, or CHA...', category: 'General Feats', requires: 'Spellcasting' },
  { name: 'Weapon Master', description: '+1 STR or DEX...', category: 'General Feats' },
  { name: 'Archery', description: 'You gain +2 to attack rolls with ranged weapons.', category: 'Fighting Styles' },
  { name: 'Blind Fighting', description: 'You gain Blindsight to a range of 10 ft.', category: 'Fighting Styles' },
  { name: 'Defense', description: 'You gain +1 to AC while wearing armor.', category: 'Fighting Styles' },
  { name: 'Dueling', description: 'You gain a +2 to damage rolls while wielding one melee weapon in one hand.', category: 'Fighting Styles' },
  { name: 'Great Weapon Fighting', description: 'While wielding one weapon with two hands, your min roll on any damage die is a 3.', category: 'Fighting Styles' },
  { name: 'Interception', description: 'When an ally within 5 ft of you is hit with an attack...', category: 'Fighting Styles' },
  { name: 'Protection', description: 'When an ally within 5 ft of you is targeted by an attack...', category: 'Fighting Styles' },
  { name: 'Thrown Weapon Fighting', description: 'You gain a +2 to damage rolls when you hit with a thrown weapon.', category: 'Fighting Styles' },
  { name: 'Two Weapon Fighting', description: 'You add your ability mod to off-hand attacks.', category: 'Fighting Styles' },
  { name: 'Unarmed Fighting', description: 'Your Unarmed Strikes deal 1d6+STR...', category: 'Fighting Styles' },
  { name: 'Epic Boon of Combat Prowess', description: '+1 STR or DEX...', category: 'Epic Boons' },
  { name: 'Epic Boon of Dimensional Travel', description: '+1 INT, WIS, or CHA...', category: 'Epic Boons' },
  { name: 'Epic Boon of Energy Resistance', description: '+1 CON...', category: 'Epic Boons' },
  { name: 'Epic Boon of Fate', description: '+1 INT, WIS, or CHA...', category: 'Epic Boons' },
  { name: 'Epic Boon of Fortitude', description: '+1 CON...', category: 'Epic Boons' },
  { name: 'Epic Boon of Irresistible Offense', description: '+1 STR or DEX...', category: 'Epic Boons' },
  { name: 'Epic Boon of Recovery', description: '+1 CON...', category: 'Epic Boons' },
  { name: 'Epic Boon of Skill', description: '+1 to any ability score...', category: 'Epic Boons' },
  { name: 'Epic Boon of Speed', description: '+1 DEX...', category: 'Epic Boons' },
  { name: 'Epic Boon of Spell Recall', description: '+1 INT, WIS, or CHA...', category: 'Epic Boons' },
  { name: 'Epic Boon of the Night Spirit', description: '+1 DEX, INT, WIS, or CHA...', category: 'Epic Boons' },
  { name: 'Epic Boon of Truesight', description: '+1 INT, WIS, or CHA...', category: 'Epic Boons' },
];

export default function FeatsTab() {
  const [search, setSearch] = useState('');

  const groupedFeats = useMemo(() => {
    const searchLower = search.toLowerCase();
    const filtered = feats.filter(
      (f) => !search || f.name.toLowerCase().includes(searchLower) || f.description.toLowerCase().includes(searchLower)
    );

    return filtered.reduce(
      (acc, feat) => {
        const category = feat.category || 'Other';
        if (!acc[category]) acc[category] = [];
        acc[category].push(feat);
        return acc;
      },
      {} as Record<string, typeof feats>
    );
  }, [search]);

  return (
    <>
      <TextField
        fullWidth
        placeholder="Search feats..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        size="small"
        sx={{ mb: 3 }}
      />

      <Box>
        {Object.entries(groupedFeats).map(([category, categoryFeats]) => (
          <Accordion key={category}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{category}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {categoryFeats.map((feat, idx) => (
                  <Box key={idx}>
                    <Typography variant="subtitle2"><strong>{feat.name}</strong></Typography>
                    <Typography variant="body2" sx={{ mb: feat.requires ? 0.5 : 0 }}>{feat.description}</Typography>
                    {feat.requires && (
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>Requires: {feat.requires}</Typography>
                    )}
                  </Box>
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </>
  );
}
