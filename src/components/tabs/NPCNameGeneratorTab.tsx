import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
  Radio,
  RadioGroup,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  IconButton,
  Tooltip,
  Chip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ClearIcon from "@mui/icons-material/Clear";

import {
  CORE_RACES,
  EXTENDED_RACES,
  generateFullName,
  generate5Names,
  formatRaceName,
  initializeNameDatabase,
} from "../../services/npcGenerator";

interface GeneratedName {
  firstName: string;
  surname: string;
  fullName: string;
}

export default function NPCNameGeneratorTab(): JSX.Element {
  const [selectedRace, setSelectedRace] = useState<string>("");
  const [selectedGender, setSelectedGender] = useState<
    "female" | "male" | "neutral"
  >("female");
  const [generatedName, setGeneratedName] = useState<GeneratedName | null>(
    null
  );
  const [generated5Names, setGenerated5Names] = useState<GeneratedName[]>([]);
  const [nameHistory, setNameHistory] = useState<GeneratedName[]>([]);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState(false);

  // Initialize database on component mount
  initializeNameDatabase();

  const handleRaceSelect = (race: string): void => {
    setSelectedRace(race);
    setGeneratedName(null);
    setGenerated5Names([]);
  };

  const handleGenerateName = (): void => {
    if (!selectedRace) {
      alert("Please select a race first!");
      return;
    }

    try {
      const newName = generateFullName(selectedRace, selectedGender);
      setGeneratedName(newName);
      setGenerated5Names([]);

      // Add to history (max 5 names)
      setNameHistory((prev) => [newName, ...prev.slice(0, 4)]);
    } catch (error) {
      console.error("Error generating name:", error);
      alert("Error generating name. Please try again.");
    }
  };

  const handleGenerate5Names = (): void => {
    if (!selectedRace) {
      alert("Please select a race first!");
      return;
    }

    try {
      const names = generate5Names(selectedRace, selectedGender);
      setGenerated5Names(names);
      setGeneratedName(null);

      // Add all to history
      setNameHistory((prev) => [
        ...names,
        ...prev.slice(0, Math.max(0, 5 - names.length)),
      ]);
    } catch (error) {
      console.error("Error generating names:", error);
      alert("Error generating names. Please try again.");
    }
  };

  const handleCopyToClipboard = async (text: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyFeedback(true);
      setTimeout(() => setCopyFeedback(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  const handleClear = (): void => {
    setSelectedRace("");
    setGeneratedName(null);
    setGenerated5Names([]);
    setNameHistory([]);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mb: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        NPC Name Generator
      </Typography>

      {/* Race Selection - Chip Group */}
      <Box>
        {/* Core Races Section */}
        <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
          Core Races
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
          {CORE_RACES.map((race) => (
            <Chip
              key={race}
              label={formatRaceName(race)}
              onClick={() => handleRaceSelect(race)}
              onDelete={
                selectedRace === race ? () => handleRaceSelect("") : undefined
              }
              size="small"
              variant={selectedRace === race ? "filled" : "outlined"}
              color={selectedRace === race ? "primary" : "default"}
            />
          ))}
        </Box>

        {/* Extended Races Section - Collapsible */}
        <Accordion defaultExpanded={false}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              Extended Races
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {EXTENDED_RACES.map((race) => (
                <Chip
                  key={race}
                  label={formatRaceName(race)}
                  onClick={() => handleRaceSelect(race)}
                  onDelete={
                    selectedRace === race ? () => handleRaceSelect("") : undefined
                  }
                  size="small"
                  variant={selectedRace === race ? "filled" : "outlined"}
                  color={selectedRace === race ? "primary" : "default"}
                />
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* Gender Selection */}
      {selectedRace && (
        <Card>
          <CardContent>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 2 }}>
              Select Gender:
            </Typography>
            <RadioGroup
              row
              value={selectedGender}
              onChange={(e) =>
                setSelectedGender(
                  e.target.value as "female" | "male" | "neutral"
                )
              }
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="neutral"
                control={<Radio />}
                label="Neutral"
              />
            </RadioGroup>

            {/* Action Buttons */}
            <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
              <Button
                variant="contained"
                onClick={handleGenerateName}
                sx={{ flex: 1 }}
              >
                Generate Name
              </Button>
              <Button
                variant="contained"
                onClick={handleGenerate5Names}
                sx={{ flex: 1 }}
              >
                Generate 5 Names
              </Button>
              <Button
                variant="outlined"
                startIcon={<ClearIcon />}
                onClick={handleClear}
              >
                Clear
              </Button>
            </Box>
          </CardContent>
        </Card>
      )}

      {/* Generated Name Display */}
      {generatedName && (
        <Card sx={{ backgroundColor: "action.hover" }}>
          <CardContent>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 2 }}>
              Generated Name:
            </Typography>
            <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
              <TextField
                label="First Name"
                value={generatedName.firstName}
                inputProps={{ readOnly: true }}
                variant="outlined"
                size="small"
                fullWidth
              />
              <TextField
                label="Surname"
                value={generatedName.surname}
                inputProps={{ readOnly: true }}
                variant="outlined"
                size="small"
                fullWidth
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <TextField
                value={generatedName.fullName}
                inputProps={{ readOnly: true }}
                variant="outlined"
                size="small"
                fullWidth
                sx={{ fontWeight: "bold" }}
              />
              <Tooltip title={copyFeedback ? "Copied!" : "Copy to clipboard"}>
                <IconButton
                  onClick={() =>
                    handleCopyToClipboard(generatedName.fullName)
                  }
                  color={copyFeedback ? "success" : "default"}
                >
                  <ContentCopyIcon />
                </IconButton>
              </Tooltip>
            </Box>

            {/* Quick Actions */}
            <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
              <Button
                variant="outlined"
                size="small"
                onClick={handleGenerateName}
              >
                Generate Another
              </Button>
              <Button
                variant="outlined"
                size="small"
                onClick={() => handleRaceSelect("")}
              >
                Generate New Race
              </Button>
            </Box>
          </CardContent>
        </Card>
      )}

      {/* Generated 5 Names Display */}
      {generated5Names.length > 0 && (
        <Card sx={{ backgroundColor: "action.hover" }}>
          <CardContent>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 2 }}>
              Generated 5 Names:
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {generated5Names.map((name, index) => (
                <Card variant="outlined" key={`${name.fullName}-${index}`}>
                  <CardContent sx={{ py: 1.5 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        <Typography variant="body2" color="textSecondary">
                          {name.firstName} <strong>{name.surname}</strong>
                        </Typography>
                      </Box>
                      <Tooltip title="Copy">
                        <IconButton
                          size="small"
                          onClick={() =>
                            handleCopyToClipboard(name.fullName)
                          }
                        >
                          <ContentCopyIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>

            {/* Quick Actions for 5 Names */}
            <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
              <Button
                variant="outlined"
                size="small"
                onClick={handleGenerate5Names}
              >
                Generate Another Set of 5
              </Button>
              <Button
                variant="outlined"
                size="small"
                onClick={() => handleRaceSelect("")}
              >
                Generate New Race
              </Button>
            </Box>
          </CardContent>
        </Card>
      )}

      {/* History Section */}
      {nameHistory.length > 0 && (
        <Accordion expanded={historyOpen} onChange={() => setHistoryOpen(!historyOpen)}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              Recent Names ({nameHistory.length})
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List sx={{ width: "100%" }}>
              {nameHistory.map((name, index) => (
                <ListItem
                  key={`${name.fullName}-${index}`}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    py: 0.5,
                  }}
                >
                  <ListItemText primary={name.fullName} />
                  <Tooltip title="Copy">
                    <IconButton
                      size="small"
                      onClick={() =>
                        handleCopyToClipboard(name.fullName)
                      }
                    >
                      <ContentCopyIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      )}
    </Box>
  );
}
