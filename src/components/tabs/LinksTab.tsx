import { useState } from 'react';
import {
  TextField,
  Button,
  Card,
  CardContent,
  CardHeader,
  Box,
  Typography,
  Link as MuiLink,
} from '@mui/material';
import { useGame, Link } from '../../context/GameContext';

export default function LinksTab() {
  const { links, addLink, removeLink, updateLink } = useGame();
  const [formData, setFormData] = useState({
    linkName: '',
    linkUrl: '',
  });
  const [search, setSearch] = useState('');
  const [editData, setEditData] = useState<Record<number, Link>>({});

  const handleAddLink = () => {
    const name = formData.linkName.trim();
    const url = formData.linkUrl.trim();

    if (!url || !/^https?:\/\//i.test(url)) {
      alert('Please enter a valid URL starting with http:// or https://');
      return;
    }

    const newLink: Link = { name: name || '', url };
    addLink(newLink);
    setFormData({ linkName: '', linkUrl: '' });
  };

  const filtered = links.filter((link) => {
    const searchLower = search.toLowerCase();
    return !search || link.name.toLowerCase().includes(searchLower) || link.url.toLowerCase().includes(searchLower);
  });

  return (
    <>
      <Typography variant="h6" sx={{ mb: 3 }}>🔗 Useful Links</Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 2, mb: 3 }}>
        <TextField
          fullWidth
          placeholder="Link Name (e.g., SRD, VTT Room)"
          value={formData.linkName}
          onChange={(e) => setFormData((prev) => ({ ...prev, linkName: e.target.value }))}
          size="small"
        />
        <TextField
          fullWidth
          placeholder="https://example.com"
          value={formData.linkUrl}
          onChange={(e) => setFormData((prev) => ({ ...prev, linkUrl: e.target.value }))}
          size="small"
        />
        <Button fullWidth variant="contained" color="primary" onClick={handleAddLink}>
          Add Link
        </Button>
      </Box>

      <TextField
        fullWidth
        placeholder="Search links by name or URL..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        size="small"
        sx={{ mb: 3 }}
      />

      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 3 }}>
        {filtered.map((link) => {
          const actualIndex = links.indexOf(link);
          return (
             <Card sx={{
              border: '1px solid #4a5578',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '0 6px 30px rgba(0, 0, 0, 0.7)',
                borderColor: '#6b7ea8',
              },
            }} key={actualIndex}>
              <CardHeader title={link.name || '(no name)'} />
              <CardContent>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  <MuiLink href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.url}
                  </MuiLink>
                </Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: 1, mb: 2 }}>
                  <TextField
                    fullWidth
                    placeholder="Name"
                    defaultValue={link.name}
                    onChange={(e) =>
                      setEditData((prev) => ({
                        ...prev,
                        [actualIndex]: { ...link, name: e.target.value },
                      }))
                    }
                    size="small"
                  />
                  <TextField
                    fullWidth
                    placeholder="https://..."
                    defaultValue={link.url}
                    onChange={(e) =>
                      setEditData((prev) => ({
                        ...prev,
                        [actualIndex]: { ...link, url: e.target.value },
                      }))
                    }
                    size="small"
                  />
                </Box>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={() => {
                      const updated = editData[actualIndex] || link;
                      updateLink(actualIndex, updated);
                    }}
                  >
                    Save
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    color="error"
                    onClick={() => removeLink(actualIndex)}
                  >
                    Remove
                  </Button>
                </Box>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </>
  );
}
