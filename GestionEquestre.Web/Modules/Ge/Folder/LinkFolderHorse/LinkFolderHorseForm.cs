﻿
namespace GestionEquestre.Ge.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Ge.LinkFolderHorse")]
    [BasedOnRow(typeof(Entities.LinkFolderHorseRow))]
    public class LinkFolderHorseForm
    {
        [Hidden]
        public Int64 Folder { get; set; }
        [LookupEditor(typeof(Ge.Scripts.HorsesLookup), MinimumResultsForSearch = 1, InplaceAdd = true)]
        public String Horse { get; set; }
    }
}