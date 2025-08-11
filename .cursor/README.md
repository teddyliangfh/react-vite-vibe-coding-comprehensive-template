# Cursor Configuration

This directory contains all Cursor IDE configuration files for the project.

## 📁 Directory Structure

```
.cursor/
├── README.md                 # This file - configuration guide
├── mcp.json                  # MCP server configuration (shared)
├── mcp.example.json          # MCP configuration template
├── settings.json             # Project-wide settings (shared)
├── rules/                    # AI coding rules (shared)
│   ├── global.mdc           # Global coding guidelines
│   ├── react.mdc            # React-specific rules
│   └── typeScript.mdc       # TypeScript-specific rules
└── personal/                 # Personal settings (git-ignored)
    ├── .gitkeep             # Directory placeholder
    └── personal-settings.example.json  # Personal settings template
```

## 🔧 Configuration Files

### Shared Configuration (Committed to Git)

- **`mcp.json`** - MCP server configuration for enhanced AI assistance
- **`settings.json`** - Project-wide Cursor settings
- **`rules/`** - AI coding guidelines and best practices

### Personal Configuration (Git-Ignored)

- **`personal/`** - Directory for your personal settings
  - Copy `personal-settings.example.json` to `personal-settings.json`
  - Add your personal preferences here
  - These files won't be committed to git

## 🚀 Getting Started

1. **Clone the repository** - All shared configurations are automatically available
2. **Personal settings** - Copy the example file and customize:
   ```bash
   cp .cursor/personal/personal-settings.example.json .cursor/personal/personal-settings.json
   ```
3. **Customize** - Edit your personal settings as needed

## 📋 Available Rules

- **Global Rules** (`rules/global.mdc`) - General coding standards
- **React Rules** (`rules/react.mdc`) - React-specific best practices
- **TypeScript Rules** (`rules/typeScript.mdc`) - TypeScript guidelines

## 🔄 MCP Server

The project includes Context7 MCP server configuration for enhanced AI assistance:

- Automatic code understanding
- Cross-file context awareness
- Smart code suggestions

## 💡 Tips

- All shared configurations are automatically applied
- Personal settings in `personal/` directory are ignored by git
- You can override any shared setting with personal preferences
- Rules are automatically used by Cursor's AI assistant
